import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Popup } from 'react-native-map-link';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as S from './styles';

export default function MarkerView({ data }) {
  const [isVisible, setVisible] = useState(false);
  const [options, setOptions] = useState({});

  function handleGetDirections() {
    setVisible(true);
    setOptions({
      latitude: data.latitude,
      longitude: data.longitude,
      googleForceLatLon: true,
      title: `${data.name}`,
      dialogTitle: 'Abrir no mapa',
      dialogMessage: 'Qual app você deseja utilizar?',
      cancelText: 'Cancelar',
    });
  }

  return (
    <S.Container>
      <Popup
        isVisible={isVisible}
        onCancelPressed={() => setVisible(false)}
        onAppPressed={() => setVisible(false)}
        onBackButtonPressed={() => setVisible(false)}
        options={options}
      />
      <S.Title>{data.name}</S.Title>
      <FlatList
        data={data.fuels}
        renderItem={({ item }) => (
          <S.Info>
            <S.Dot color={item.color} />
            <S.Price>R$ {item.pivot.price}</S.Price>
          </S.Info>
        )}
        numColumns={2}
      />
      <S.Button onPress={handleGetDirections}>
        <S.ButtonContainer>
          <Icon name="map-marker" size={13} color="#ff5e62" />
          <S.ButtonText>Rota</S.ButtonText>
        </S.ButtonContainer>
      </S.Button>
    </S.Container>
  );
}
