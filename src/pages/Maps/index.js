import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Platform, Dimensions, Alert } from 'react-native';
import { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MarkerView from '~/components/MarkerView';
import { Container, Mapa } from './styles';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -10.1738314;
const LONGITUDE = -48.3290049;
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
  const [tracksViewChanges] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      error => {
        console.tron.log(error.code);
        switch (error.code) {
          case 1:
            if (Platform.OS === 'ios') {
              Alert.alert(
                '',
                'Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Privacidade - Localização',
              );
            } else {
              Alert.alert(
                '',
                'Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Aplicativos - Abastece + - Localização',
              );
            }
            break;
          default:
            Alert.alert('', 'Erro ao detectar sua localização');
        }
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
    );
  }, []);

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

    fetchData();
  }, [region.latitude, region.longitude]);

  return (
    <Container>
      <Mapa
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        showsUserLocation={true}
        loadingEnabled={true}
        initialRegion={region}
        onRegionChangeComplete={item => setRegion(item)}
        showsMyLocationButton={true}>
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
