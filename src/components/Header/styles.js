import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { metrics, colors, fonts } from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Linear = styled(LinearGradient)`
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  height: ${props => (props.fit ? hp('23%') : hp('32%'))};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  flex: 1;
  flex-direction: row;
`;

export const Info = styled.SafeAreaView`
  flex-direction: column;
  margin-left: ${wp('9%')};
  margin-top: ${metrics.navBarHeight};
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.medium};
`;

export const CityBox = styled.View`
  flex-direction: row;
`;

export const CityText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.regular};
  font-weight: bold;
`;

export const CityIcon = styled(Icon.Button)`
  padding: 0;
  margin-left: ${metrics.baseMargin};
  margin-top: 2px;
`;
