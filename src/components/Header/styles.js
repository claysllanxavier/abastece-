import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { metrics, colors, fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
`;

export const Info = styled.View`
  flex-direction: column;
  margin-left: ${metrics.doubleBaseMargin};
`;

export const Text = styled.Text`
  color: ${colors.dark};
  font-size: ${fonts.small};
`;

export const CityBox = styled.View`
  flex-direction: row;
`;

export const CityText = styled.Text`
  color: ${colors.darker};
  font-size: ${fonts.medium};
  font-weight: bold;
`;

export const CityIcon = styled(Icon.Button)`
  padding: 0;
  margin-left: ${metrics.baseMargin};
  margin-top: 2px;
`;
