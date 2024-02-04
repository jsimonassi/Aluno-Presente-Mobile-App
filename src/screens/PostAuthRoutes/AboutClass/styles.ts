import styled from 'styled-components/native';

export const ContainerStyled = styled.ScrollView`
  display: flex;
  padding: 8px;
`;

export const TipInfo = styled.Text`
  ${({theme}) => theme.typography.p};
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
`;
