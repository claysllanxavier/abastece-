import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';
import PropTypes from 'prop-types';
import * as S from './styles';

const GasItem = ({ data, navigation }) => {
  const getPrice = function(fuels) {
    let price = parseFloat(0).toFixed(2);
    let tinyPrice = 0;
    if (fuels) {
      price = fuels[0].pivot.price.substring(0, 4);
      tinyPrice = fuels[0].pivot.price.substring(4, 5);
    }
    return [price, tinyPrice];
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('GasDetail', { id: data.id });
      }}>
      <S.Container>
        <S.Row>
          <S.Box>
            {data.type && <S.Thumb source={{ uri: data.type.url }} />}
            <S.Info>
              <S.Gas>{data.name}</S.Gas>
              <S.Address numberOfLines={2}>
                {parseFloat(data.distance).toFixed(2)} Km - {data.address}
              </S.Address>
            </S.Info>
          </S.Box>
          <S.ViewPrice>
            <S.Real>R$</S.Real>
            <S.Price>
              {getPrice(data.fuels)[0]}
              <S.TinyPrice>{getPrice(data.fuels)[1]}</S.TinyPrice>
            </S.Price>
          </S.ViewPrice>
        </S.Row>
        <S.Information>
          {`Atualizado ${formatRelative(
            new Date(data.updated_at.replace(/-/g, '/')),
            new Date(),
            {
              locale: pt,
            },
          )}`}
        </S.Information>
      </S.Container>
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
