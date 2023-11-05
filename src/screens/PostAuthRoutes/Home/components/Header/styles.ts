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

export const ProfileImageStyled = styled.Image`
  border-radius: 45px;
  width: 60px;
  height: 60px;
  margin-left: 8px;
  background-color: ${({theme}) => theme.palette.primaryColor};
  border: 2px solid ${({theme}) => theme.palette.fontIconColor};
`;

export const InfoGroupStyled = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
`;
