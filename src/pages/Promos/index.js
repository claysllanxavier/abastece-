import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from '~/components/Header';
import PromoItem from '~/components/PromoItem';
import { Container, SpaceMargin, CardTitle, Title } from './styles';

export default class Promos extends Component {
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

    return (
      <Container>
        <Header fit={true} />
        <SpaceMargin>
          <CardTitle>
            <Title>Promoções</Title>
          </CardTitle>
        </SpaceMargin>
        <FlatList
          data={data}
          renderItem={({ item }) => <PromoItem big data={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </Container>
    );
  }
}
