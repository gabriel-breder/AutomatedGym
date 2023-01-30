import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput, TouchableOpacity } from 'react-native';

export const Container = styled(TextInput).attrs((props) => ({
  placeholderTextColor: "#E5E5E5",
}))`
  background-color: #737373;

  width: 100%;
  margin: 5px 0;
  padding: 10px;

  border-radius: 10px;

  color: #E5E5E5;
`;
