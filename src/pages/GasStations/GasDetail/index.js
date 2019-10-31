import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { colors } from '~/styles';
import api from '~/services/api';
import * as S from './styles';

export default function GasDetail({ navigation }) {
  const [gas, setGas] = useState([]);
  const { id } = navigation.getParam('id');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/postos/posto/${id}/`);
      setGas(data);
    }

    fetchData();
  }, [id]);
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
            <S.Price color={colors[item.color]}>
              4,29<S.TinyPrice>9</S.TinyPrice>
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
        {gas.combustiveis &&
          gas.combustiveis.map(item => this.renderFuel(item))}
      </ScrollView>
      <S.Button>
        <S.ButtonText>Traçar Rota • 2.2 Km</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

GasDetail.navigationOptions = ({ navigation }) => ({
  title: 'Rodoposto',
  headerStyle: {
    backgroundColor: '#ff5e62',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
