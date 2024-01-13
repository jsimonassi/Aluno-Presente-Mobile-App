import styled from 'styled-components/native';

export const InfoText = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: center;
  font-size: 12px;
  padding: 0 32px;
`;

export const ContainerStyled = styled.View`
  display: flex;
  height: 85%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
