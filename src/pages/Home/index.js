import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import GasItem from '~/components/GasItem';
import * as S from './styles';
import api from '~/services/api';

export default function Home({ navigation }) {
  const [gas, setGas] = useState([]);
  const [companies, setCompany] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.tron.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/gas', {
        params: {
          latitude: latitude,
          longitude: longitude,
          limit: 5,
        },
      });
      setGas(data.data);
    }

    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude]);

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
      <ScrollView>
        <Header />
        <S.SpaceMargin>
          <S.CardPromo>
            <S.TextPromo>Últimas Ofertas</S.TextPromo>
            <FlatList
              data={companies}
              horizontal={true}
              renderItem={({ item }) => (
                <PromoItem data={item} navigation={navigation} />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </S.CardPromo>
        </S.SpaceMargin>
        <S.GasText>Postos Próximos</S.GasText>
        {gas.map(item => {
          return (
            <GasItem
              data={item}
              key={item.id.toString()}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </S.Container>
  );
}
