import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Touch = styled(TouchableOpacity)``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text}
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.mustard};
`;
