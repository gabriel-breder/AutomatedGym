import React from 'react';
import { Container, TabItem } from './styles';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../../global/styles/theme';

export const TabBar = ({ state, navigation }) => {
  const color = (index) => state.index === index ? theme.colors.orange : theme.colors.shape;
  const size = 24;

  const navigate = screen => navigation.navigate(screen);

  return (
    <Container>
      <TabItem onPress={() => navigate('Home')}><MaterialCommunityIcons name="calendar-today" size={size} color={color(0)} /></TabItem>
      <TabItem onPress={() => navigate('Activities')}><MaterialIcons name="history" size={size} color={color(1)} /></TabItem>
      <TabItem onPress={() => navigate('Workouts')}><Octicons name="list-unordered" size={size} color={color(2)} /></TabItem>
      <TabItem onPress={() => navigate('Body')}><MaterialCommunityIcons name="weight-lifter" size={size} color={color(3)} /></TabItem>
    </Container>
  );
}
