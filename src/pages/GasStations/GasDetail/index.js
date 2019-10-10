import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { colors } from '~/styles';
import * as S from './styles';

export default class GasDetail extends Component {
  static navigationOptions = {
    title: 'Rodoposto',
    headerStyle: {
      backgroundColor: '#ff5e62',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  renderFuel = item => {
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
  render() {
    const data = [
      {
        id: 1,
        name: 'Gasolina Comum',
        color: 'red',
      },
      {
        id: 2,
        name: 'Etanol',
        color: 'green',
      },
      {
        id: 3,
        name: 'Diesel Comum',
        color: 'yellow',
      },
      {
        id: 4,
        name: 'Diesel S10',
        color: 'gray',
      },
      {
        id: 5,
        name: 'Gasolina Aditivada',
        color: 'blue',
      },
    ];
    return (
      <S.Container>
        <ScrollView>
          <S.Title>Preço dos Combustíveis</S.Title>
          {data.map(item => this.renderFuel(item))}
        </ScrollView>
        <S.Button>
          <S.ButtonText>Traçar Rota • 2.2 Km</S.ButtonText>
        </S.Button>
      </S.Container>
    );
  }
}
