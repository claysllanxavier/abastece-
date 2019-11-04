import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import api from '~/services/api';
import * as S from './styles';

export default function GasDetail({ navigation }) {
  const [company, setCompany] = useState([]);
  const id = navigation.getParam('id');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/companies/${id}/franchises`);
      setCompany(data);
    }

    fetchData();
  }, [id]);

  const renderItem = item => {
    return (
      <S.Card>
        <S.CardHeader>
          <S.CardTitle>{item.name}</S.CardTitle>
          <S.InfoBox>
            <S.Information>Contato: {item.phone}</S.Information>
            <S.Information>Endereço: {item.address} </S.Information>
            <S.Information>
              Horário de Funcionamento: segunda / sexta de 08:00 as 18:30
            </S.Information>
          </S.InfoBox>
        </S.CardHeader>
        <S.CardBody>
          {item.offers[0].regulation ? (
            <S.CardText>{item.offers[0].regulation}</S.CardText>
          ) : (
            <S.CardImage source={{ uri: item.offers[0].url }} />
          )}
        </S.CardBody>
      </S.Card>
    );
  };

  return (
    <S.Container>
      <ScrollView>
        <S.Section>
          <S.Image source={{ uri: company.url }} />
        </S.Section>
        {company.franchises && company.franchises.map(item => renderItem(item))}
      </ScrollView>
    </S.Container>
  );
}

GasDetail.navigationOptions = ({ navigation }) => ({
  title: 'Informações das Ofertas',
  headerStyle: {
    backgroundColor: '#ff5e62',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
