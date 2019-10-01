import styled from 'styled-components/native';
import { metrics } from '~/styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const ItemImage = styled.Image`
  width: ${props => (props.big ? wp('90%') : 270)};
  height: 150;
  border-radius: ${metrics.baseRadius};
`;
