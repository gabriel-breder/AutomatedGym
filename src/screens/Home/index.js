import React, { useContext } from 'react';
import { Container, Header, Title, Separator } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

import { GlobalContext } from '../../context/GlobalContext';
import { useTheme } from 'styled-components';

const Home = () => {
  const context = useContext(GlobalContext);
  const user = context.user;
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Title>Olá, {user.name}!</Title>
        <FontAwesome5 name="user-circle" size={32} color={theme.colors.shape} />
      </Header>
      <Separator />
      <Title>Próximo Treino</Title>
    </Container>
  );
}

export default Home;