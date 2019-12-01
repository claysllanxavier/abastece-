import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
const { width, height } = Dimensions.get('window');

export default {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallPadding: 10,
  basePadding: 20,
  doubleBasePadding: 40,
  baseRadius: 10,
  tabBarHeight: 54,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 30,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
};
