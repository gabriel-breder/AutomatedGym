import React, { useContext, useState } from 'react';
import { Container, Icon, RegisterContainer, InputWrapper, NoAccWrapper } from './styles';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { AccRedirect } from '../../components/Forms/AccRedirect';

import Logo from '../../assets/images/logo.png';
import { GlobalContext } from '../../context/GlobalContext';

const Register = ({ navigation }) => {

  const context = useContext(GlobalContext);

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordConfirmation, setPasswordConfirmation] = useState([]);

  const handleRegister = () => {
    const body = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    context.handleRegister(body, navigation)
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
            onChangeText={setPasswordConfirmation}
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