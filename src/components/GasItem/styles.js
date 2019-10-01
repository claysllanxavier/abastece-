import styled from 'styled-components/native';
import { metrics, colors, fonts } from '~/styles';

export const Container = styled.View`
  border-color: white;
  border-width: 1;
  border-style: solid;
  background: ${colors.white};
  padding: 2px 0px 2px 10px;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin}px 0px
    ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 5px 5px 8px rgba(68, 68, 6, 0.2);
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${metrics.basePadding};
`;

export const Box = styled.View`
  flex-direction: row;
`;

export const Thumb = styled.Image`
  margin: ${metrics.baseMargin}px 0px;
  width: 40;
  height: 40;
  border-radius: ${metrics.baseRadius};
`;

export const Info = styled.View`
  padding: ${metrics.basePadding / 2}px;
`;

export const Gas = styled.Text`
  font-size: ${fonts.medium}px;
  font-weight: bold;
  color: ${colors.verydark};
`;

export const Address = styled.Text`
  font-size: ${fonts.small}px;
  color: ${colors.darker};
`;

export const Real = styled.Text`
  font-size: ${fonts.tiny}px;
  font-weight: bold;
  color: ${colors.darker};
  align-self: flex-start;
`;

export const Price = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.morderatered};
  font-weight: bold;
`;

export const ViewPrice = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Information = styled.Text`
  font-size: ${fonts.tiny};
`;
