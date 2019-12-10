import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import PropTypes from 'prop-types';
import * as S from './styles';
import environment from '~/config/environment';

const GasItem = ({ data, navigation }) => {
  const getPrice = function(item) {
    const price =
      item.price.toString().substring(0, 4) || parseFloat(0).toFixed(2);
    const tinyPrice = item.price.toString().substring(4, 5) || 0;
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
            <S.Thumb
              source={{ uri: `${environment.imageUrl}/images/${data.image}` }}
            />
            <S.Info>
              <S.Gas>{data.name}</S.Gas>
              <S.Address numberOfLines={2}>
                A {parseFloat(data.distance).toFixed(2)} Km - {data.address}
              </S.Address>
            </S.Info>
          </S.Box>
          <S.ViewPrice>
            <S.Real>R$</S.Real>
            <S.Price color={data.color}>
              {getPrice(data)[0]}
              <S.TinyPrice color={data.color}>{getPrice(data)[1]}</S.TinyPrice>
            </S.Price>
          </S.ViewPrice>
        </S.Row>
        <S.Information>
          {`Atualizado a ${formatDistance(
            new Date(data.dt_updated),
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

GasItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    dt_updated: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default GasItem;
