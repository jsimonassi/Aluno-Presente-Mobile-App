import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;

export const CheckingTextStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  color: ${({theme}) => theme.palette.fontIconColor};
  margin-bottom: 64px;
  width: 70%;
  text-align: center;
`;

export const GpsLogoContainerStyled = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GpsLogoStyled = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;
