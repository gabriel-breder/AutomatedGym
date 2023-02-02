import React from 'react';
import { Container, Logo, LoadIndicator } from './styles';
import logo from '../../assets/images/logo.png';

export const Loading = () => {
  return (
    <Container>
      <Logo source={logo} />
      <LoadIndicator />
    </Container>
  );
}