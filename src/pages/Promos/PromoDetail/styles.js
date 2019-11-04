import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lightcyan};
`;

export const Section = styled.View`
  margin: ${metrics.baseMargin / 2}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
  background: ${colors.white};
  padding: ${metrics.basePadding}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 120;
  border-radius: ${metrics.baseRadius};
`;

export const Card = styled.View`
  border-color: white;
  border-width: 1;
  border-style: solid;
  background: ${colors.white};
  margin: ${metrics.doubleBaseMargin}px ${metrics.baseMargin}px 0px
    ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
`;

export const CardHeader = styled.View`
  background: ${colors.light};
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
  padding: 3px;
`;

export const CardTitle = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  margin: ${metrics.baseMargin}px;
`;

export const Information = styled.Text`
  font-size: ${fonts.medium}px;
  color: ${colors.darker};
`;

export const InfoBox = styled.View`
  flex-direction: column;
  width: ${wp('90%')};
  margin-left: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const CardBody = styled.View`
  padding: 3px;
  margin: ${metrics.baseMargin}px;
`;

export const CardText = styled.Text`
  font-size: ${fonts.regular}px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 350;
`;
