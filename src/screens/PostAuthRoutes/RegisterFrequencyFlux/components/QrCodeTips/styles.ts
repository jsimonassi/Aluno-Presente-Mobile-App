import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${({theme}) => theme.palette.primaryColor};
  justify-content: space-between;
  padding: 32px 8px;
`;

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

export const BodyInfosContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const TipImageStyled = styled.Image`
  height: 60%;
  margin-left: 7%;
  resize-mode: contain;
`;

export const TipTextStyled = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: center;
  margin-bottom: 16px;
`;

export const FooterContainerStyled = styled.View`
  display: flex;
  justify-content: flex-end;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 8px;
  flex: 2;
`;

interface BackIconOptions {
  showBackIcon?: boolean;
}
