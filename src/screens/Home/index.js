import React, { useContext } from 'react';
import { Container, Header, Title, Separator } from './styles';

import { FontAwesome } from '@expo/vector-icons';

import { GlobalContext } from '../../context/GlobalContext';

const Home = () => {
  const context = useContext(GlobalContext);
  const user = context.user;

  return (
    <Container>
      <Header>
        <Title>Olá, {user.name}!</Title>
        <FontAwesome name="user-circle-o" size={40} color="white" />
      </Header>
      <Separator />
      <Title>Próximo Treino</Title>
    </Container>
  );
}

export default Home;