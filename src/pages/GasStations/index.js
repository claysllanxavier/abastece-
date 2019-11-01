import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Header from '~/components/Header';
import { Container, SpaceMargin, CardTitle, Title } from './styles';
import GasItem from '~/components/GasItem';
import api from '~/services/api';

export default function GasStations({ navigation }) {
  const [gasStations, setGasStations] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/gas', {
        params: {
          latitude: latitude,
          longitude: longitude,
        },
      });
      setGasStations(data.data);
    }

    fetchData();
  }, [latitude, longitude]);

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
