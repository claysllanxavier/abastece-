import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Loader from '~/components/Loader';
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    setLoading(false);
    const watchID = Geolocation.watchPosition(position => {
      setRegion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    });
    return () => Geolocation.clearWatch(watchID);
  }, []);

  return (
    <Container>
      <Loader loading={isLoading} />
      {!isLoading && (
        <Mapa
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
          showsUserLocation={true}
          region={region}
          onRegionChangeComplete={item => setRegion(item)}
        />
      )}
    </Container>
  );
}
