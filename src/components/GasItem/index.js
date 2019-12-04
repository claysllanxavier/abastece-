import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import PropTypes from 'prop-types';
import * as S from './styles';

const GasItem = ({ data, navigation }) => {
  const getPrice = function(fuels) {
    let price = parseFloat(0).toFixed(2);
    let tinyPrice = 0;
    if (fuels.length) {
      price = fuels[0].pivot.price.toString().substring(0, 4);
      tinyPrice = fuels[0].pivot.price.toString().substring(4, 5) || 0;
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
                A {parseFloat(data.distance).toFixed(2)} Km - {data.address}
              </S.Address>
            </S.Info>
          </S.Box>
          <S.ViewPrice>
            <S.Real>R$</S.Real>
            <S.Price color={data.fuels[0].color}>
              {getPrice(data.fuels)[0]}
              <S.TinyPrice color={data.fuels[0].color}>
                {getPrice(data.fuels)[1]}
              </S.TinyPrice>
            </S.Price>
          </S.ViewPrice>
        </S.Row>
        <S.Information>
          {data.fuels.length &&
            `Atualizado a ${formatDistance(
              new Date(data.fuels[0].pivot.dt_updated),
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
  }).isRequired,
};

export default GasItem;
