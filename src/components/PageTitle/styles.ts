import styled from 'styled-components/native';

export const HeaderContainerStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTextStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  font-size: 22px;
`;

export const HeaderIconStyled = styled.Image<BackIconOptions>`
  width: 32px;
  height: 24px;
  resize-mode: contain;
  opacity: ${({showBackIcon}) => (showBackIcon ? 1 : 0)};
`;

interface BackIconOptions {
  showBackIcon?: boolean;
}
