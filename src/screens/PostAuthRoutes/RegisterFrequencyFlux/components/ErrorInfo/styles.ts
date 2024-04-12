import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  height: 100%;
`;

export const TitleContainerStyled = styled.View<TitleContainerStyledProps>`
  display: flex;
  flex: ${({type}) => (type === 'small' ? 0.7 : 1)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 16px;
`;

export const TitleStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

export const TipTextStyled = styled.Text`
  ${({theme}) => theme.typography.p};
  margin-top: 8px;
  text-align: center;
`;

export const ImageContainerStyled = styled.View`
  display: flex;
  flex: 1;
`;

export const ImageStyled = styled.Image`
  width: 230px;
  height: 230px;
`;

export const ButtonContainerStyled = styled.View`
  display: flex;
  flex: 0.5;
  max-height: 130px;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 16px;
`;

interface TitleContainerStyledProps {
  type: 'small' | 'big';
}
