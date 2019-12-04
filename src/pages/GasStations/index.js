import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Header from '~/components/Header';
import FooterList from '~/components/FooterList';
import * as S from './styles';
import GasItem from '~/components/GasItem';
import api from '~/services/api';

export default function GasStations({ navigation }) {
  const [gasStations, setGasStations] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [canAction, setCanAction] = useState(true);
  const [fuel, setFuel] = useState(1);
  const [sorting, setSorting] = useState('distance:asc');
  const [fuels, setFuels] = useState([
    { id: 1, name: 'Gasolina Comum', checked: true },
    { id: 2, name: 'Álcool' },
    { id: 3, name: 'Diesel Comum' },
    { id: 4, name: 'Diesel S10' },
    { id: 5, name: 'Gasolina Adtivada' },
  ]);
  const [sorts, setSorts] = useState([
    { id: 'distance:asc', name: 'Mais Próximos', checked: true },
    { id: 'distance:desc', name: 'Mais Distântes' },
  ]);

  function getLoaction() {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.tron.log(error.code);
        switch (error.code) {
          case 1:
            if (Platform.OS === 'ios') {
              Alert.alert(
                '',
                'Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Privacidade - Localização',
              );
            } else {
              Alert.alert(
                '',
                'Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Aplicativos - Abastece + - Localização',
              );
            }
            break;
          default:
            Alert.alert('', 'Erro ao detectar sua localização');
        }
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
    );
  }

  useEffect(() => {
    let mockdata = fuels;
    mockdata.map(item => {
      item.id === fuel ? { item, checked: true } : { item, checked: false };
    });
    setFuels(mockdata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuel]);

  useEffect(() => {
    let mockdata = sorts;
    mockdata.map(item => {
      item.id === sorting ? { item, checked: true } : { item, checked: false };
    });
    setSorts(mockdata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  useEffect(() => {
    setLoading(true);
    getLoaction();
    setLoading(false);
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
          distance: 100,
          page: page,
          fuel: fuel,
          sort: sorting,
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
    setLatitude(0);
    setLongitude(0);
    getLoaction();
  }

  function renderFooter() {
    if (!isLoading) {
      return null;
    }
    return <FooterList />;
  }

  function loadMore() {
    if (isLoading) {
      return null;
    }
    if (!canAction) {
      setPage(page + 1);
      setCanAction(true);
    }
  }

  function onSelectFuel(selected) {
    setFuel(selected);
    setRefreshing(true);
    setGasStations([]);
    setPage(1);
    setLatitude(0);
    setLongitude(0);
    getLoaction();
  }

  function onSelectSort(selected) {
    setSorting(selected);
    setRefreshing(true);
    setGasStations([]);
    setPage(1);
    setLatitude(0);
    setLongitude(0);
    getLoaction();
  }

  return (
    <S.Container>
      <Header fit={true} title="Postos" />
      <S.BarFilter>
        <S.Filter
          isSelectSingle
          colorTheme="#ff5e62"
          popupTitle="Combustível"
          selectedTitlteStyle={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          showSearchBox={false}
          cancelButtonText="Cancelar"
          selectButtonText="Confirmar"
          data={fuels}
          onSelect={item => {
            onSelectFuel(item[0]);
          }}
        />
        <S.Filter
          isSelectSingle
          colorTheme="#ff5e62"
          selectedTitlteStyle={{ textAlign: 'center', fontWeight: 'bold' }}
          popupTitle="Ordenação"
          showSearchBox={false}
          cancelButtonText="Cancelar"
          selectButtonText="Confirmar"
          data={sorts}
          onSelect={item => {
            onSelectSort(item[0]);
          }}
        />
      </S.BarFilter>
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
