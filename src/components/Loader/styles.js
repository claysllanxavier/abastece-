import styled from 'styled-components/native';
import { metrics } from '~/styles';

export const ModalBack = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`;

export const ActivityIndicatorWrapper = styled.View`
  background-color: #fff;
  height: 100;
  width: 100;
  border-radius: ${metrics.baseRadius}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
