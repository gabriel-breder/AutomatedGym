import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: 3px 0;
  margin: 5px 0;

  align-items: center;
`;
