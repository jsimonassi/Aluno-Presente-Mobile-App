import styled from 'styled-components/native';

interface ITextStyledProps {
  title?: boolean;
}

export const TextStyled = styled.Text<ITextStyledProps>`
  color: ${({theme, title}) =>
    title ? theme.palette.primaryColor : theme.palette.greyTextLabel};
  font-family: 'Nunito-Regular';
`;

export const SecondaryTextStyled = styled.Text`
  color: ${({theme}) => theme.palette.fontIconColor};
  font-family: 'Nunito-Regular';
`;
