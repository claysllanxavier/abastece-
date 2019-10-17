import React, { Component } from 'react';
import { ActionSheetIOS, View } from 'react-native';
import { colors } from '~/styles';
import { Linear, Info, Text, CityBox, CityText, CityIcon } from './styles';

export default class Header extends Component {
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
            </CityBox>
          </Info>
        </Linear>
      </View>
    );
  }
}
