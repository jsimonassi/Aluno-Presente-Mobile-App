import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  height: 100%;
`;

export const TitleContainerStyled = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const TitleStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  font-size: 24px;
  text-align: center;
`;

export const ImageContainerStyled = styled.View`
  display: flex;
  justify-content: center;
  flex: 2;
`;

export const ImageStyled = styled.Image`
  width: 230px;
  height: 230px;
`;

export const ButtonContainerStyled = styled.View`
  display: flex;
  flex: 0.7;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin-bottom: 36px;
`;
