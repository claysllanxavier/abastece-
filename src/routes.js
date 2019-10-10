import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '~/pages/Home';
import GasStations from '~/pages/GasStations';
import GasDetail from '~/pages/GasStations/GasDetail';
import Maps from '~/pages/Maps';
import Promos from '~/pages/Promos';
import PromoDetail from '~/pages/Promos/PromoDetail';

const GassStack = createStackNavigator({
  GasStations: {
    screen: GasStations,
    navigationOptions: ({ navigation }) => ({
      header: null,
      headerBackTitle: null,
    }),
  },
  GasDetail: {
    screen: GasDetail,
  },
});

const PromoStack = createStackNavigator({
  Promos: {
    screen: Promos,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  PromoDetail: PromoDetail,
});

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Início',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
      },
    },
    Map: {
      screen: Maps,
      navigationOptions: {
        tabBarLabel: 'Mapa',
        header: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="location-arrow" size={20} color={tintColor} />
        ),
      },
    },
    GasStations: {
      screen: GassStack,
      navigationOptions: {
        tabBarLabel: 'Postos',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="gas-pump" size={20} color={tintColor} />
        ),
      },
    },
    Promos: {
      screen: PromoStack,
      navigationOptions: {
        tabBarLabel: 'Promoções',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ticket-alt" size={20} color={tintColor} />
        ),
      },
    },
  }),
);

export default Routes;
