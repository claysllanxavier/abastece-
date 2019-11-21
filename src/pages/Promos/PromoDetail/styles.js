import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lightcyan};
`;

export const Section = styled.View`
  margin: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.1);
  background: ${colors.white};
  padding: ${metrics.basePadding}px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100;
  border-radius: ${metrics.baseRadius};
`;

export const Image = styled.Image`
  flex: 1;
  margin: ${metrics.baseMargin}px;
  height: undefined;
  width: undefined;
`;

export const SectionButtons = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-top: 5;
`;

export const Button = styled.TouchableOpacity`
  width: ${wp('45%')};
  height: 45;
  padding: ${metrics.basePadding / 2}px;
  background-color: #fff;
  border-radius: 10px;
  margin: ${metrics.baseMargin}px;
  border-color: ${colors.morderatered};
  border-width: 1;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.morderatered};
  font-size: 16px;
  margin-left: 5px;
  margin-top: -2.6;
`;
