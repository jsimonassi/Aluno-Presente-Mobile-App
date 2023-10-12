import styled from 'styled-components/native';

export const TextStyled = styled.Text`
  color: ${({theme}) => theme.palette.primaryColor};
`;

export const SecondaryTextStyled = styled.Text`
  color: ${({theme}) => theme.palette.fontIconColor};
`;
