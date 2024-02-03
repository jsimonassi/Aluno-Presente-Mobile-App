import styled from 'styled-components/native';

export const HeaderContainerStyled = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 16px;
  padding-top: 24px;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;

export const InfoGroupStyled = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
`;
