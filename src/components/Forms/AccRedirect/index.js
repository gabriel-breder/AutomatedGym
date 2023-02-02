import React from 'react';

import { Container, Touch, Text, Link } from './styles';

export const AccRedirect = ({ register, onPress }) => {
  return (
    <Container>
      <Text>{register ? 'Já' : 'Ainda não'} possui uma conta? </Text>
      <Touch
        onPress={onPress}
      ><Link>{register ? 'Entrar' : 'Criar conta'}</Link></Touch>
    </Container>
  );
}