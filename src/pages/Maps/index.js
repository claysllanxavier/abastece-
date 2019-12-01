import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Platform, Dimensions, Alert } from 'react-native';
import { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import MarkerView from '~/components/MarkerView';
import { Container, Mapa } from './styles';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Maps() {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [gasStations, setGasStations] = useState([]);
  const [tracksViewChanges, setTracksViewChanges] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/gas', {
        params: {
          latitude: region.latitude,
          longitude: region.longitude,
          distance: 5,
          limit: 10,
          full: true,
        },
      });

      setGasStations(data.data);
    }

    if (region.latitude !== 0 && region.longitude !== 0) {
      fetchData();
    }
  }, [region.latitude, region.longitude]);

  return (
    <Container>
      <Mapa
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        showsUserLocation={true}
        followsUserLocation={true}
        loadingEnabled={true}
        showsMyLocationButton={true}
        onRegionChangeComplete={item => setRegion(item)}>
        {gasStations.map(gas => {
          return (
            <Mapa.Marker
              coordinate={{
                latitude: gas.latitude,
                longitude: gas.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              key={gas.id.toString()}
              tracksViewChanges={tracksViewChanges}>
              <Callout>
                <MarkerView data={gas} />
              </Callout>
            </Mapa.Marker>
          );
        })}
      </Mapa>
    </Container>
  );
}
