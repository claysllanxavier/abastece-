import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import api from '~/services/api';
import * as S from './styles';

export default function GasDetail({ navigation }) {
  const [gas, setGas] = useState([]);
  const id = navigation.getParam('id');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/gas/${id}/`, {
        params: {
          latitude: -10.349369,
          longitude: -48.294267,
        },
      });
      setGas(data);
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    const { name } = gas;
    navigation.setParams({ title: name });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [gas]);

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
            <S.Information>Atualizado há 1 dia</S.Information>
          </S.ViewPrice>
        </S.Row>
      </S.Fuel>
    );
  };

  return (
    <S.Container>
      <ScrollView>
        <S.Title>Preço dos Combustíveis</S.Title>
        {gas.fuels && gas.fuels.map(item => renderFuel(item))}
      </ScrollView>
      <S.Button>
        <S.ButtonText>
          Traçar Rota • {gas.distance && gas.distance.toFixed(2)} Km
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

GasDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  headerStyle: {
    backgroundColor: '#ff5e62',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
