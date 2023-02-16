import React from 'react';
import { Container, LeftContainer, RightContainer, Wrapper, Options, Title, Label, Text } from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';

const MyWorkouts = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Titulo</Title>
        <Wrapper><Label>Personal: </Label><Text>Nome Personal</Text></Wrapper>
      </LeftContainer>
      <RightContainer>
        <Options><SimpleLineIcons name="options" size={20} color="white" /></Options>
        <Text>venc: 06/12/23</Text>
      </RightContainer>
    </Container>
  );
}

export default MyWorkouts;