import React, { Component } from 'react';
import { ActionSheetIOS, View } from 'react-native';
import { colors } from '~/styles';
import { Linear, Info, Text, CityBox, CityText, CityIcon } from './styles';

export default class Header extends Component {
  handleCity = () => {
    let cities = [
      'Palmas - TO',
      'Araguaína - TO',
      'Imperatriz - MA',
      'Cancelar',
    ];
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: cities,
        cancelButtonIndex: 3,
        title: 'Selecione a cidade',
        message: 'Cidades disponíveis do app',
      },
      args => console.log(args),
    );
  };

  render() {
    const { fit } = this.props;
    return (
      <View>
        <Linear
          colors={['#ff9966', '#ff5e62']}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          fit={fit}>
          <Info>
            <Text>Cidade</Text>
            <CityBox>
              <CityText>Palmas - TO</CityText>
              <CityIcon
                name="chevron-down"
                color="#FF3338"
                backgroundColor={colors.transparent}
                onPress={this.handleCity}
              />
            </CityBox>
          </Info>
        </Linear>
      </View>
    );
  }
}
