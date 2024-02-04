import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;
