import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import PropTypes from 'prop-types';

import { Container, ItemImage } from './styles';

const PromoItem = ({ data, big, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('PromoDetail', { id: data.id });
      }}>
      <Container>
        <ItemImage big={big} source={{ uri: data.url }} resizeMode="cover" />
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
