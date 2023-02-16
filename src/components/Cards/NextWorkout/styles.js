import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 7px;
  
  padding: 7px 10px;
  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.orange};

  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-bottom: 25px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

