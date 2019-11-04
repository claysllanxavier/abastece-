import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Header from '~/components/Header';
import * as S from './styles';
import GasItem from '~/components/GasItem';
import api from '~/services/api';

export default function GasStations({ navigation }) {
  const [gasStations, setGasStations] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [canAction, setCanAction] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (page > lastPage) {
        return null;
      }

      setLoading(true);

      const { data } = await api.get('/gas', {
        params: {
          latitude: latitude,
          longitude: longitude,
          distance: 60,
          page: page,
        },
      });

      setGasStations([...gasStations, ...data.data]);
      setLoading(false);
      setRefreshing(false);
      setLastPage(data.lastPage);
    }

    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude, page]);

  function onRefresh() {
    setRefreshing(true);
    setGasStations([]);
    setPage(1);
  }

  function renderFooter() {
    if (!loading) {
      return null;
    }
    return (
      <S.Loading>
        <ActivityIndicator size="large" color="#ff5e62" />
      </S.Loading>
    );
  }

  function loadMore() {
    if (loading) {
      return null;
    }
    if (!canAction) {
      setPage(page + 1);
      setCanAction(true);
    }
  }

  return (
    <S.Container>
      <Header fit={true} />
      <S.SpaceMargin>
        <S.CardTitle>
          <S.Title>Postos</S.Title>
        </S.CardTitle>
      </S.SpaceMargin>
      <FlatList
        data={gasStations}
        renderItem={({ item }) => (
          <GasItem data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        onMomentumScrollBegin={() => {
          setCanAction(false);
        }}
      />
    </S.Container>
  );
}
