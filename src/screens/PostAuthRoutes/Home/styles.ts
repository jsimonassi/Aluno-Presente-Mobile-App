import styled from 'styled-components/native';

export const InfoText = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: center;
  font-size: 12px;
  padding: 0 32px;
`;
