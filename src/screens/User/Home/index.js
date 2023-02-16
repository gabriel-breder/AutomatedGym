import React, { useContext } from 'react';
import { Container, Header, Title, Separator } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

import { GlobalContext } from '../../../context/GlobalContext';
import { useTheme } from 'styled-components';
import NextWorkout from '../../../components/Cards/NextWorkout';
import MyWorkouts from '../../../components/Cards/MyWorkouts';
import AddWorkout from '../../../components/AddWorkout';

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
      <NextWorkout />
      <Separator />
      <Title>Minhas Fichas</Title>
      <MyWorkouts />
      <MyWorkouts />
      <MyWorkouts />
      <AddWorkout />

    </Container>
  );
}

export default Home;