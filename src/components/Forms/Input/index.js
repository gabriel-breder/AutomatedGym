import React from 'react';

import { Container } from './styles';

export const Input = ({ placeholder, onChangeText, secureTextEntry }) => {
  return (
    <Container
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}
