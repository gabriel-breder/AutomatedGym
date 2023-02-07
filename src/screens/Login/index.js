import React, { useContext, useState } from 'react';
import { Container, LoginContainer, InputWrapper, Icon, NoAccWrapper } from './styles';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { AccRedirect } from '../../components/Forms/AccRedirect';

import Logo from '../../assets/images/logo.png';
import { GlobalContext } from '../../context/GlobalContext';

const Login = ({ navigation }) => {
  const context = useContext(GlobalContext);

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    }

    context.handleLogin(body, navigation)
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