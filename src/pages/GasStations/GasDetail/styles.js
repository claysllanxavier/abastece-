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

export const Fuel = styled.View`
  border-color: white;
  border-width: 1;
  border-style: solid;
  background: ${colors.white};
  padding: 3px 0px 3px 10px;
  margin: ${metrics.doubleBaseMargin}px ${metrics.baseMargin}px 0px
    ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
`;

export const Title = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  text-align: center;
  margin-top: ${metrics.doubleBaseMargin}px;
  color: ${colors.morderatered};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${metrics.basePadding};
`;

export const Box = styled.View`
  flex-direction: row;
`;

export const Info = styled.View`
  padding: ${metrics.basePadding / 2}px;
  justify-content: center;
`;

export const Gas = styled.Text`
  font-size: ${fonts.medium}px;
  font-weight: bold;
  color: ${colors.verydark};
`;

export const Real = styled.Text`
  font-size: ${fonts.small}px;
  font-weight: bold;
  color: ${colors.darker};
  align-self: flex-start;
`;

export const Price = styled.Text`
  font-size: ${fonts.input}px;
  color: ${props => props.color};
  font-weight: bold;
`;

export const TinyPrice = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.dark};
`;

export const ViewPrice = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: ${metrics.baseMargin / 2}px;
`;

export const Information = styled.Text`
  font-size: ${fonts.tiny};
`;

export const Button = styled.TouchableOpacity`
  width: ${wp('95%')};
  height: 45;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: ${metrics.baseMargin}px;
  border-color: ${colors.morderatered};
  border-width: 1;
  align-self: center;
  position: absolute;
  bottom: 0;
`;

export const ButtonText = styled.Text`
  color: ${colors.morderatered};
  text-align: center;
  font-size: 15px;
  padding-top: 3px;
`;
