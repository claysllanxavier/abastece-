import styled from 'styled-components/native';
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
  height: ${props => (props.fit ? hp('20%') : hp('29%'))};
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

export const SpaceMargin = styled.View`
  margin-top: ${hp('12%')};
`;

export const CardTitle = styled.View`
  margin: ${metrics.baseMargin / 5}px ${metrics.baseMargin + 5}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
  padding: ${metrics.basePadding}px 0px;
  background: ${colors.white};
  height: ${wp('20%')};
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.morderatered};
  font-size: ${fonts.input};
  text-align: center;
  font-weight: bold;
`;
