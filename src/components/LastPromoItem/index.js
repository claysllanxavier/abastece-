import React, { Component } from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import PropTypes from 'prop-types';

import { Container, ItemImage } from './styles';

class LastPromoItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <Container>
          <ItemImage source={{ uri: data.banner_url }} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

LastPromoItem.propTypes = {
  data: PropTypes.shape({
    banner_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default LastPromoItem;
