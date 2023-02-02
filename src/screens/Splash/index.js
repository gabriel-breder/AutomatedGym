import React from 'react';
import { Container, Icon, BtnWrapper } from './styles';

import Logo from '../../assets/images/logo.png';
import { Button } from '../../components/Forms/Button';

import BccImage from '../../assets/images/splash_background.jpg';

const Splash = ({ navigation }) => {
  return (
    <Container source={BccImage} resizeMode="cover">
      <Icon
        source={Logo}
      />
      <BtnWrapper>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="CRIAR CONTA"
          onPress={() => navigation.navigate("Register")}
        />
      </BtnWrapper>
    </Container>
  );
}

export default Splash;