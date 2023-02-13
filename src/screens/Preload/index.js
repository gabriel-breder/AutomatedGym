import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { Loading } from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = '';
      if (token) { navigation.navigate("Home"); } // TODO: validar
      else navigation.navigate("Splash");
    }
    checkToken();
  }, [])

  return (
    <Container>
      <Loading />
    </Container>
  );
}

export default Preload;