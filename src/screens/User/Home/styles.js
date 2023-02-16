import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};

  flex: 1;
  padding: ${getStatusBarHeight() + 20}px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePic = styled.Image`
  background-color: #fff;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  margin: 15px auto;

  background-color: ${({ theme }) => theme.colors.shape};
  opacity: .2;
`;