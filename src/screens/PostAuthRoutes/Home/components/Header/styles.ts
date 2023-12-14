import styled from 'styled-components/native';
import {HexGenerator} from '../../../../../helpers/hexGenerator';

export const HeaderContainerStyled = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 16px;
  padding-top: 24px;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;

export const ProfileImageStyled = styled.View`
  border-radius: 45px;
  width: 60px;
  height: 60px;
  margin-left: 8px;
  background-color: ${() => HexGenerator.randomDarkColor()};
  border: 2px solid ${({theme}) => theme.palette.fontIconColor};
  justify-content: center;
  align-items: center;
`;

export const InfoGroupStyled = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
`;
