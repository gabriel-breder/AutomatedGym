import React from 'react';
import { Container, TabItem } from './styles';

import { Octicons, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

import theme from '../../global/styles/theme';

export const TabBar = ({ state, navigation }) => {
  const color = (index) => state.index === index ? theme.colors.orange : theme.colors.shape;
  const size = 24;

  const navigate = screen => navigation.navigate(screen);

  const role = 'aluno';

  return (
    <Container>
      {/* Alunos */}
      {
        role === 'aluno' &&
        <>
          <TabItem onPress={() => navigate('Home')}><MaterialCommunityIcons name="calendar-today" size={size} color={color(0)} /></TabItem>
          <TabItem onPress={() => navigate('Activities')}><MaterialIcons name="history" size={size} color={color(2)} /></TabItem>
          <TabItem onPress={() => navigate('Workouts')}><Octicons name="list-unordered" size={size} color={color(3)} /></TabItem>
          <TabItem onPress={() => navigate('Body')}><MaterialCommunityIcons name="weight-lifter" size={size} color={color(4)} /></TabItem>
        </>
      }

      {/* Personal */}
      {
        role === 'personal' &&
        <><TabItem onPress={() => navigate('Trainees')}><Ionicons name="people" size={size} color={color(1)} /></TabItem></>
      }

      {/* Admin */}
      {
        role === 'admin' &&
        <>
          <TabItem onPress={() => navigate('Users')}><Ionicons name="people" size={size} color={color(1)} /></TabItem>
        </>
      }
    </Container>
  );
}
