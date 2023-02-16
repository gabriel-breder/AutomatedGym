import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 7px;
  
  height: 70px;
  padding: 7px 10px;
  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.orange};

  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContainer = styled.View`
  justify-content: space-between;
`;

export const RightContainer = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Options = styled(TouchableOpacity)``;

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

