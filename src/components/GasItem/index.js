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

const GasItem = ({ data, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('GasDetail', { id: data.id });
      }}>
      <Container>
        <Row>
          <Box>
            <Thumb
              source={{ uri: data.bandeira ? data.bandeira.imagem : '' }}
            />
            <Info>
              <Gas>{data.nome}</Gas>
              <Address>
                {data.distance} - {data.endereco}
              </Address>
            </Info>
          </Box>
          <ViewPrice>
            <Real>R$</Real>
            <Price>
              {data.combustiveis
                ? data.combustiveis[0].preco.substring(0, 4)
                : parseFloat(0).toFixed(2)}
              <TinyPrice>
                {data.combustiveis
                  ? data.combustiveis[0].preco.substring(4, 5)
                  : 0}
              </TinyPrice>
            </Price>
            <Information>Atualizado há 1 dia</Information>
          </ViewPrice>
        </Row>
      </Container>
    </TouchableWithoutFeedback>
  );
};

// GasItem.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default GasItem;
