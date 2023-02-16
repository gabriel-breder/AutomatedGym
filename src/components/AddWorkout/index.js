import React from 'react';
import { Container } from './styles';
import { Ionicons } from '@expo/vector-icons';

const AddWorkout = () => {
  return (
    <Container>
      <Ionicons name="add" size={24} color="white" />
    </Container>
  );
}

export default AddWorkout;