import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import GasItem from '~/components/GasItem';
import {
  Container,
  SpaceMargin,
  CardPromo,
  TextPromo,
  GasText,
} from './styles';

export default class Home extends Component {
  render() {
    const data = [
      {
        id: 1,
        banner_url:
          'http://www.cotrisoja.com.br/wp-content/uploads/2016/07/Gasolina-Comum-R-370-1024x520.jpg',
      },
      {
        id: 2,
        banner_url:
          'http://www.vergamota.com.br/uploads/img/produtos/view_3750_produtos.png',
      },
      {
        id: 3,
        banner_url:
          'http://www.cotrisoja.com.br/wp-content/uploads/2016/10/Gasolina-Aditivada-R-391-1024x520.jpg',
      },
    ];

    const gasStations = [
      {
        id: 1,
        name: 'Rodoposto',
        distance: '100m',
        address: 'Quadra 206 Sul',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmLCZ7phSu89XyAxvbAfig9Yk2MwYLa-ITr4h35VCT7GFps9z',
      },
      {
        id: 2,
        name: 'Shell Box',
        distance: '900m',
        address: 'Rua 110 Sul Av Ns 8 1',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_H9PpqoqfdAlKDzP7lY2O8CAAy6gWY_B1iVs079z_Sq_7q0oG',
      },
      {
        id: 3,
        name: 'Posto Disbrava',
        distance: '1,5km',
        address: 'Quadra 103 Norte',
        image:
          'http://rioshop.srv.br/src/uploads/2015/11/ipiranga-logo-vertical.jpg',
      },
    ];

    return (
      <Container>
        <Header />
        <SpaceMargin>
          <CardPromo>
            <TextPromo>Últimas Promoções</TextPromo>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({ item }) => <PromoItem data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </CardPromo>
          <GasText>Postos Mais Baratos</GasText>
          <FlatList
            data={gasStations}
            renderItem={({ item }) => <GasItem data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </SpaceMargin>
      </Container>
    );
  }
}
