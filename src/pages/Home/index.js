import React, { Component } from 'react';
import { Layout, Text, RkCard } from 'react-native-ui-kitten';
import Header from '~/components/Header';
import { Container, Section } from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container level="2">
        <Section>
          <Text>Olá, Usuário</Text>
          <Header />
        </Section>
      </Container>
    );
  }
}
