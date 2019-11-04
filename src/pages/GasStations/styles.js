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

export const Loading = styled.View`
  align-self: center;
  margin: 40px 0px;
`;

export const SpaceMargin = styled.View`
  margin-top: ${hp('17%')};
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
