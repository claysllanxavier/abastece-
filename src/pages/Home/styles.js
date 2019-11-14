import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { metrics, colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lightcyan};
`;

export const SpaceMargin = styled.View`
  margin-top: ${hp('10%')};
`;

export const CardPromo = styled.View`
  margin: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
  padding: ${metrics.basePadding / 2}px 0px 0px ${metrics.basePadding / 2.5}px;
  background: ${colors.white};
  height: ${wp('45%')};
`;

export const TextPromo = styled.Text`
  color: ${colors.morderatered};
  font-size: ${fonts.regular};
  text-align: left;
  padding-left: ${metrics.basePadding};
`;

export const GasText = styled.Text`
  color: ${colors.morderatered};
  font-size: ${fonts.regular};
  margin-top: ${metrics.baseMargin};
  text-align: left;
  padding-left: ${metrics.basePadding};
`;
