import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import Select2 from 'react-native-select-two';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lightcyan};
`;

export const BarFilter = styled.View`
  flex-direction: row;
  margin: ${metrics.baseMargin}px;
`;

export const Filter = styled(Select2)`
  border-radius: 5;
  background: #fff;
  width: 31%;
  margin-right: ${metrics.baseMargin}px;
  border: none;
`;
