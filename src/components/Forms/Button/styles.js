import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.orange};
 
  width: 100%;
  margin: 5px 0;
  padding: 12px 10px;

  border-radius: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #14213D;
`;