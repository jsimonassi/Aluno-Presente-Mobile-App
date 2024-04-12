import styled from 'styled-components/native';
import {MainText} from '../../../../../components/Text';

export const ContainerStyled = styled.View`
  flex: 1;
  display: flex;
  background-color: ${({theme}) => theme.palette.surface1};
  align-items: center;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
`;

export const InfosStyled = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageStyled = styled.Image`
  justify-content: center;
  align-items: center;
  max-height: 45%;
  resize-mode: contain;
`;

export const TitleStyled = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.palette.primaryColor};
  margin-top: 20px;
  font-family: 'Nunito-ExtraBold';
`;

export const MainTextStyled = styled(MainText)`
  font-size: 16px;
  color: ${({theme}) => theme.palette.primaryColor};
  margin-top: 20px;
  text-align: center;
`;
