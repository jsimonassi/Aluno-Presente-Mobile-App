import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.palette.primaryColor};
  border-radius: 32px;
  min-height: 200px;
  padding: 16px;
  justify-content: space-between;
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

export const TeacherNameStyled = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  font-size: 16px;
  margin-top: 8px;
`;

export const TipTextStyled = styled.Text`
  ${({theme}) => theme.typography.p};
`;

export const FooterContainerStyled = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 8px;
`;

interface BackIconOptions {
  showBackIcon?: boolean;
}
