import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Header from '~/components/Header';
import { Container, SpaceMargin, CardTitle, Title } from './styles';
import GasItem from '~/components/GasItem';
import api from '~/services/api';

export default function GasStations({ navigation }) {
  const [gasStations, setGasStations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/gas', {
        params: {
          latitude: -10.349369,
          longitude: -48.294267,
        },
      });
      setGasStations(data.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header fit={true} />
      <SpaceMargin>
        <CardTitle>
          <Title>Postos</Title>
        </CardTitle>
      </SpaceMargin>
      <FlatList
        data={gasStations}
        renderItem={({ item }) => (
          <GasItem data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}
