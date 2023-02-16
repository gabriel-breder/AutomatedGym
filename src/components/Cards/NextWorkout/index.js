import React from 'react';
import { RightContainer, LeftContainer, Options } from '../MyWorkouts/styles';
import { Container, Header, Wrapper, Title, Label, Text } from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';

const NextWorkout = () => {
  return (
    <Container>
      <LeftContainer>
        <Header>
          <Title>Treino A</Title>
          <Text>Perna, Ombro, Peito</Text>
        </Header>
        <Wrapper><Label>Progresso: </Label><Text>6/12</Text></Wrapper>
      </LeftContainer>
      <RightContainer>
        <Options><SimpleLineIcons name="options" size={20} color="white" /></Options>
      </RightContainer>
    </Container>
  );
}

export default NextWorkout;