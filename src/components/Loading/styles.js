import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.Image``;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.orange,
  size: 'large'
}))``;