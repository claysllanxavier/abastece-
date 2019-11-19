import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import * as S from './styles';
import Loader from '~/components/Loader';

export default function GasDetail({ navigation }) {
  const [company, setCompany] = useState({});
  const [isLoading, setLoading] = useState(false);
  const id = navigation.getParam('id');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get(`/companies/${id}`);
      setCompany(data);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <S.Container>
      <Loader loading={isLoading} />
      {company.offers && (
        <S.Image source={{ uri: company.offers[0].url }} resizeMode="cover" />
      )}
    </S.Container>
  );
}

GasDetail.navigationOptions = () => ({
  title: 'Informações das Ofertas',
  headerStyle: {
    backgroundColor: '#ff5e62',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
