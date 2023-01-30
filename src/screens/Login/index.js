import React, { useState } from 'react';
import { Container, InputWrapper, Text } from './styles';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { AccRedirect } from '../../components/Forms/AccRedirect';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLogin = () => {
    console.log(`email: ${email}, password: ${password}`)
  }

  return (
    <Container>
      <Text>Login page</Text>
      <InputWrapper>
        <Input
          placeholder={'E-mail'}
          onChangeText={setEmail}
        />
        <Input
          placeholder={'Senha'}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="LOGIN"
          onPress={handleLogin}
        />
      </InputWrapper>

      <AccRedirect onPress={() => { navigation.navigate('Register') }} />


    </Container>
  );
}

export default Login;