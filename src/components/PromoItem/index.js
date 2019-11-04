import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import PropTypes from 'prop-types';

import { Container, ItemImage } from './styles';

const PromoItem = ({ data, big }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Container>
        <ItemImage big={big} source={{ uri: data.url }} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

PromoItem.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PromoItem;
