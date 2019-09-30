import styled from 'styled-components/native';
import { Layout } from 'react-native-ui-kitten';
import { metrics } from '~/styles';

export const Container = styled(Layout)`
  flex: 1;
  padding: 20px;
`;

export const Section = styled.View`
  margin-top: ${metrics.navBarHeight};
  padding: 20px;
  background: #fff;
  border-radius: 20px;
`;
