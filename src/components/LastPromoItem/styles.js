import styled from 'styled-components/native';
import { metrics } from '~/styles';

export const Container = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const ItemImage = styled.Image`
  width: 270;
  height: 150;
  border-radius: ${metrics.baseRadius};
`;
