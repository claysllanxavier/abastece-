import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '~/services/api';
import Header from '~/components/Header';
import FooterList from '~/components/FooterList';
import PromoItem from '~/components/PromoItem';
import * as S from './styles';

export default function Promos({ navigation }) {
  const [companies, setCompany] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!refreshing) {
        return;
      }
      setLoading(true);
      const { data } = await api.get('/companies');
      setCompany(data);
      setLoading(false);
      setRefreshing(false);
    }

    fetchData();
  }, [refreshing]);

  function onRefresh() {
    setRefreshing(true);
  }

  function renderFooter() {
    if (!isLoading) {
      return null;
    }
    return <FooterList />;
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
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={renderFooter}
      />
    </S.Container>
  );
}
