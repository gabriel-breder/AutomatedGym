import React, { useState } from 'react';
import { Container, LoginContainer, InputWrapper, Icon, NoAccWrapper } from './styles';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { AccRedirect } from '../../components/Forms/AccRedirect';

import Logo from '../../assets/images/logo.png';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLogin = () => {
    console.log(`email: ${email}, password: ${password}`)
  }

  return (
    <Container>
      <Icon
        source={Logo}
      />
      <LoginContainer>
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
            title="ENTRAR"
            onPress={handleLogin}
          />
        </InputWrapper>
        <NoAccWrapper><AccRedirect onPress={() => { navigation.navigate('Register') }} /></NoAccWrapper>
      </LoginContainer>
    </Container>
  );
}

export default Login;