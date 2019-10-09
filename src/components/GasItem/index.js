import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Thumb,
  Box,
  Info,
  Gas,
  Address,
  Price,
  Real,
  ViewPrice,
  Information,
  TinyPrice,
} from './styles';

const GasItem = ({ data }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Container>
        <Row>
          <Box>
            <Thumb source={{ uri: data.image }} />
            <Info>
              <Gas>{data.name}</Gas>
              <Address>
                {data.distance} - {data.address}
              </Address>
            </Info>
          </Box>
          <ViewPrice>
            <Real>R$</Real>
            <Price>
              4,29<TinyPrice>9</TinyPrice>
            </Price>
            <Information>Atualizado há 1 dia</Information>
          </ViewPrice>
        </Row>
      </Container>
    </TouchableWithoutFeedback>
  );
};

GasItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default GasItem;
