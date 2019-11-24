import React from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';

const MarkerView = ({ data }) => {
  return (
    <S.Container>
      <S.Title>{data.name}</S.Title>
      <FlatList
        data={data.fuels}
        renderItem={({ item }) => (
          <S.Info>
            <S.Dot color={item.color} />
            <S.Price>R$ {item.pivot.price}</S.Price>
          </S.Info>
        )}
        numColumns={2}
      />
    </S.Container>
  );
};

export default MarkerView;
