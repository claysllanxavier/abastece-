import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lightcyan};
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 560;
  border-radius: ${metrics.baseRadius};
`;
