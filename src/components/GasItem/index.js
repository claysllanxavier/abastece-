import React, { Component } from 'react';

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
} from './styles';

class GasItem extends Component {
  render() {
    const { data } = this.props;

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
              <Price>4,299</Price>
            </ViewPrice>
          </Row>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

GasItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default GasItem;
