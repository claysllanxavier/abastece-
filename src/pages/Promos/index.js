import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import api from '~/services/api';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import * as S from './styles';

export default function Promos({ navigation }) {
  const [companies, setCompany] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get('/companies');
      setCompany(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  function renderFooter() {
    if (!isLoading) {
      return null;
    }
    return (
      <S.Loading>
        <ActivityIndicator size="small" />
      </S.Loading>
    );
  }

  return (
    <S.Container>
      <Header fit={true} />
      <S.SpaceMargin>
        <S.CardTitle>
          <S.Title>Ofertas</S.Title>
        </S.CardTitle>
      </S.SpaceMargin>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <PromoItem big data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={renderFooter}
      />
    </S.Container>
  );
}
