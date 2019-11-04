import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import api from '~/services/api';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import * as S from './styles';

// import { Container } from './styles';

export default function Promos({ navigation }) {
  const [companies, setCompany] = useState([]);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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
      const { data } = await api.get('/companies', {
        params: {
          latitude: latitude,
          longitude: longitude,
          limit: 5,
        },
      });
      setCompany(data);
    }

    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude]);

  return (
    <S.Container>
      <Header fit={true} />
      <S.SpaceMargin>
        <S.CardTitle>
          <S.Title>Ofertas</S.Title>
        </S.CardTitle>
      </S.SpaceMargin>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <PromoItem big data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </S.Container>
  );
}
