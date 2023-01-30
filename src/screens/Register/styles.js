import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;

  padding: 50px 0;
`;

export const RegisterContainer = styled.View`
  align-items: center;
  justify-content: center;
  
  width: 100%;
`;

export const InputWrapper = styled.View`
  width: 80%;
`;

export const Input = styled.TextInput`
  border: 1px solid black;
  padding: 2px 5px;
`;

export const Button = styled.Button``;

export const Icon = styled.Image``;

export const NoAccWrapper = styled.View`
  margin-top: 10px;
`;