import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from '~/components/Header';
import { Container, SpaceMargin, CardTitle, Title } from './styles';
import GasItem from '~/components/GasItem';

export default class GasStations extends Component {
  render() {
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
        <Header fit={true} />
        <SpaceMargin>
          <CardTitle>
            <Title>Gasolina</Title>
          </CardTitle>
        </SpaceMargin>
        <FlatList
          data={gasStations}
          renderItem={({ item }) => (
            <GasItem data={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Container>
    );
  }
}
