import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import PromoItem from '~/components/PromoItem';
import GasItem from '~/components/GasItem';
import * as S from './styles';
import api from '~/services/api';

export default function Home({ navigation }) {
  const [gas, setGas] = useState([]);
  const [companies, setCompany] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
    SplashScreen.hide();
    setLoading(true);
    getLoaction();
    setLoading(false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get('/gas', {
        params: {
          latitude: latitude,
          longitude: longitude,
          limit: 5,
        },
      });
      setGas(data.data);
      setLoading(false);
      setRefreshing(false);
    }

    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await api.get('/companies', {
        params: {
          latitude: latitude,
          longitude: longitude,
          limit: 5,
        },
      });
      setCompany(data);
      setLoading(false);
    }

    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude]);

  function onRefresh() {
    setRefreshing(true);
    setGas([]);
    setLatitude(0);
    setLongitude(0);
    getLoaction();
  }

  return (
    <S.Container>
      <Loader loading={isLoading} />
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
      <FlatList
        data={gas}
        renderItem={({ item }) => (
          <GasItem data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </S.Container>
  );
}
