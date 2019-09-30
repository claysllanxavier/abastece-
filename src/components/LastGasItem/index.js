import React, { Component } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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
} from './styles';

class LastGasItem extends Component {
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
            <View style={{ flexDirection: 'row' }}>
              <Real>R$</Real>
              <Price>4,299</Price>
            </View>
          </Row>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

LastGasItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default LastGasItem;
