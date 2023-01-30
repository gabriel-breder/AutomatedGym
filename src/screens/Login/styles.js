import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text}
`;

export const InputWrapper = styled.View`
  width: 80%;
`;

export const Input = styled.TextInput`
  border: 1px solid black;
  padding: 2px 5px;
`;

export const Button = styled.Button``;