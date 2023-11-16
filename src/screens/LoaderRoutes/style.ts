import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.primaryColor};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;
