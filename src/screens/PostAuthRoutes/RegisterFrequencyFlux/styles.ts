import styled from 'styled-components/native';

export const BlueContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
  height: 100%;
`;
