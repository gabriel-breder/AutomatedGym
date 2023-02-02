import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;

export const Icon = styled.Image``;

export const BtnWrapper = styled.View`
  width: 80%;
`;