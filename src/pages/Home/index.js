import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import GasItem from '~/components/GasItem';
import * as S from './styles';
import api from '~/services/api';

export default function Home({ navigation }) {
  const [gas, setGas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/gas', {
        params: {
          latitude: -10.349369,
          longitude: -48.294267,
          limit: 5,
        },
      });
      setGas(data.data);
    }

    fetchData();
  }, []);

  const data = [
    {
      id: 1,
      banner_url:
        'http://www.cotrisoja.com.br/wp-content/uploads/2016/07/Gasolina-Comum-R-370-1024x520.jpg',
    },
    {
      id: 2,
      banner_url:
        'http://www.vergamota.com.br/uploads/img/produtos/view_3750_produtos.png',
    },
    {
      id: 3,
      banner_url:
        'http://www.cotrisoja.com.br/wp-content/uploads/2016/10/Gasolina-Aditivada-R-391-1024x520.jpg',
    },
  ];
  return (
    <S.Container>
      <ScrollView>
        <Header />
        <S.SpaceMargin>
          <S.CardPromo>
            <S.TextPromo>Últimas Ofertas</S.TextPromo>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({ item }) => <PromoItem data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </S.CardPromo>
        </S.SpaceMargin>
        <S.GasText>Postos Próximos</S.GasText>
        {gas.map(item => {
          return (
            <GasItem
              data={item}
              key={item.id.toString()}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </S.Container>
  );
}
