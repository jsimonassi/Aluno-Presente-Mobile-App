import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
`;

export const TipTextStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  color: ${({theme}) => theme.palette.fontIconColor};
  margin-bottom: 16px;
  text-align: center;
`;

export const CodeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 0 16px;
  margin-top: 32px;
  height: 20%;
`;

// Definindo o componente estilizado
export const StyledTextInput = styled.TextInput`
  ${({theme}) => theme.typography.title};
  color: ${({theme}) => theme.palette.primaryColor};
  background-color: ${({theme}) => theme.palette.surface1};
  width: 40px;
  height: 50px;
  text-align: center;
  border-radius: 8px;
`;
