import React from 'react';

import { Container, Title } from './styles';

export const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
