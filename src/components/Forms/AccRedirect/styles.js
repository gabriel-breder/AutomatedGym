import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;

`;

export const Touch = styled(TouchableOpacity)``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.mustard};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
`;
