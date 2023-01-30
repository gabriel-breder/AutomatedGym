import React, { useState } from 'react';
import { Container, Icon, RegisterContainer, InputWrapper, NoAccWrapper } from './styles';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { AccRedirect } from '../../components/Forms/AccRedirect';

import Logo from '../../assets/images/logo.png';

const Register = ({ navigation }) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const handleRegister = () => {
    console.log(`email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}`)
  }

  return (
    <Container>
      <Icon
        source={Logo}
      />
      <RegisterContainer>
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
          <Input
            placeholder={'Confirmar senha'}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Button
            title="CRIAR CONTA"
            onPress={handleRegister}
          />
        </InputWrapper>
        <NoAccWrapper><AccRedirect register onPress={() => { navigation.navigate('Login') }} /></NoAccWrapper>
      </RegisterContainer>
    </Container>
  );
}

export default Register;