import React, { useState, useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import { Popup } from 'react-native-map-link';
import api from '~/services/api';
import * as S from './styles';
import Loader from '~/components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function GasDetail({ navigation }) {
  const [company, setCompany] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [options, setOptions] = useState({});

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

  function makeCall() {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${company.phone}`;
    } else {
      phoneNumber = `telprompt:${company.phone}`;
    }

    Linking.openURL(phoneNumber);
  }

  function handleGetDirections() {
    setVisible(true);
    setOptions({
      latitude: company.latitude,
      longitude: company.longitude,
      googleForceLatLon: true,
      title: `${company.name}`,
      dialogTitle: 'Abrir no mapa',
      dialogMessage: 'Qual app você deseja utilizar?',
      cancelText: 'Cancelar',
    });
  }

  return (
    <S.Container>
      <Loader loading={isLoading} />
      <Popup
        isVisible={isVisible}
        onCancelPressed={() => setVisible(false)}
        onAppPressed={() => setVisible(false)}
        onBackButtonPressed={() => setVisible(false)}
        options={options}
      />
      <S.Section>
        <S.Logo source={{ uri: company.url }} />
      </S.Section>
      {company.offers && (
        <S.ImagContainer>
          <S.Image
            source={{ uri: company.offers[0].url }}
            borderRadius={7}
            resizeMode="cover"
          />
        </S.ImagContainer>
      )}
      <S.SectionButtons>
        <S.Button onPress={handleGetDirections}>
          <S.ButtonContainer>
            <Icon name="map-marker" size={13} color="#ff5e62" />
            <S.ButtonText>Rota</S.ButtonText>
          </S.ButtonContainer>
        </S.Button>
        <S.Button onPress={makeCall}>
          <S.ButtonContainer>
            <Icon name="phone" size={13} color="#ff5e62" />
            <S.ButtonText>Telefonar</S.ButtonText>
          </S.ButtonContainer>
        </S.Button>
      </S.SectionButtons>
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
