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
  margin-bottom: 36px;
`;

export const TipTextStyled = styled.Text`
  ${({theme}) => theme.typography.p};
  color: ${({theme}) => theme.palette.fontIconColor};
  margin-top: 36px;
  text-align: center;
`;

export const CameraContainerStyled = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 16px;
`;
