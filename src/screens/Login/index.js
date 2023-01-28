import React from 'react';
import { Container, InputWrapper, Input, Button, Text } from './styles';

const Login = () => {
  return (
    <Container>
      <Text>Login page</Text>
      <InputWrapper>
        <Input
          placeholder={'E-mail'}
        // onChangeText={setEmail}
        />
        <Input
          placeholder={'Senha'}
          // onChangeText={setPassword}
          secureTextEntry={true}
        />
      </InputWrapper>

      <Button
        title="LOGIN"
      />

    </Container>
  );
}

export default Login;