import styled from 'styled-components/native';

export const HeaderContainerStyled = styled.View`
  display: flex;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;

export const TitleText = styled.Text`
  ${({theme}) => theme.typography.title};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;
