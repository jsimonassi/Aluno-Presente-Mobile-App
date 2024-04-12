import styled from 'styled-components/native';
import {HexGenerator} from '../../helpers/hexGenerator';

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
