import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';
import Geolocation from '@react-native-community/geolocation';
import api from '~/services/api';
import * as S from './styles';

export default function GasDetail({ navigation }) {
  const [gas, setGas] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const id = navigation.getParam('id');

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
      const { data } = await api.get(`/gas/${id}/`, {
        params: {
          latitude: latitude,
          longitude: longitude,
        },
      });
      setGas(data);
    }

    fetchData();
  }, [id, latitude, longitude]);

  const renderFuel = item => {
    return (
      <S.Fuel key={item.id}>
        <S.Row>
          <S.Box>
            <S.Info>
              <S.Gas>{item.name}</S.Gas>
            </S.Info>
          </S.Box>
          <S.ViewPrice>
            <S.Real>R$</S.Real>
            <S.Price color={item.color}>
              {item.pivot.price.substring(0, 4)}
              <S.TinyPrice>{item.pivot.price.substring(4, 5)}</S.TinyPrice>
            </S.Price>
          </S.ViewPrice>
        </S.Row>
        <S.Information>
          {`Atualizado ${formatRelative(
            new Date(item.updated_at.replace(/-/g, '/')),
            new Date(),
            {
              locale: pt,
            },
          )}`}
        </S.Information>
      </S.Fuel>
    );
  };

  return (
    <S.Container>
      <ScrollView>
        {gas.name && (
          <S.Section>
            <S.Image source={{ uri: gas.type.url }} />
            <S.InfoBox>
              <S.Name>{gas.name}</S.Name>
              <S.Type>Bandeira: {gas.type.name}</S.Type>
              <S.Phone>Contato: {gas.phone}</S.Phone>
              <S.Address>Endereço: {gas.address}</S.Address>
            </S.InfoBox>
          </S.Section>
        )}
        <S.Title>Preço dos Combustíveis</S.Title>
        {gas.fuels && gas.fuels.map(item => renderFuel(item))}
        <S.Button>
          <S.ButtonText>
            Traçar Rota • {gas.distance && gas.distance.toFixed(2)} Km
          </S.ButtonText>
        </S.Button>
      </ScrollView>
    </S.Container>
  );
}

GasDetail.navigationOptions = ({ navigation }) => ({
  title: 'Informação do Posto',
  headerStyle: {
    backgroundColor: '#ff5e62',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
