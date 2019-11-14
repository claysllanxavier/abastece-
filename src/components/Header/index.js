import React, { Component } from 'react';
import { View } from 'react-native';
import * as S from './styles';

export default class Header extends Component {
  render() {
    const { fit, title } = this.props;
    return (
      <View>
        <S.Linear
          colors={['#ff9966', '#ff5e62']}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          fit={fit}>
          <S.Info>
            <S.Text>Cidade</S.Text>
            <S.CityBox>
              <S.CityText>Palmas - TO</S.CityText>
            </S.CityBox>
          </S.Info>
        </S.Linear>
        {title && (
          <S.SpaceMargin>
            <S.CardTitle>
              <S.Title>{title}</S.Title>
            </S.CardTitle>
          </S.SpaceMargin>
        )}
      </View>
    );
  }
}
