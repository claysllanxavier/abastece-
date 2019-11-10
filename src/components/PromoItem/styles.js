import styled from 'styled-components/native';
import { metrics } from '~/styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.View`
  margin-top: ${metrics.baseMargin}px;
  padding-left: ${metrics.basePadding / 1.2}px;
`;

export const ItemImage = styled.Image`
  width: ${props => (props.big ? wp('90%') : wp('35%'))};
  height: 120;
  border-radius: ${metrics.baseRadius};
  border-width: 0.2px;
`;
