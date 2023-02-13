import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 52px;
  background-color: ${({ theme }) => theme.colors.tab_bar};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TabItem = styled(TouchableOpacity)`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
