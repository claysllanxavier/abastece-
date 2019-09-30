import React, { Component } from 'react';
import { ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '~/styles';
import { Container, Info, Text, CityBox, CityText, CityIcon } from './styles';

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
    return (
      <Container>
        <Icon name="gas-pump" size={40} color={colors.morderatered} />
        <Info>
          <Text>Cidade</Text>
          <CityBox>
            <CityText>Palmas - TO</CityText>
            <CityIcon
              name="chevron-down"
              color={colors.morderatered}
              backgroundColor={colors.transparent}
              onPress={this.handleCity}
            />
          </CityBox>
        </Info>
      </Container>
    );
  }
}
