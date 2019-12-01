import styled from 'styled-components/native';
import { metrics, fonts, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  margin: ${metrics.baseMargin}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.medium}px;
  font-weight: bold;
`;

export const Info = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  align-items: center;
  flex-basis: 50;
`;

export const Dot = styled.View`
  height: 12;
  width: 12;
  background-color: ${props => (props.color ? props.color : '#bbb')};
  border-radius: 50;
`;

export const Price = styled.Text`
  font-size: ${fonts.small}px;
  margin-left: ${metrics.baseMargin / 1.5}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
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

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-top: 5;
`;
