import styled from 'styled-components/native';

export const CardContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 8px 24px;
  border-radius: 16px;
  padding: 8px 16px;
`;

export const TitleContainerStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TitleStyled = styled.Text`
  ${({theme}) => theme.typography.title};
  font-size: 32px;
  font-weight: 600;
`;

export const SubtitleStyled = styled.Text`
  ${({theme}) => theme.typography.boldSubtitle};
  margin-left: 4px;
  margin-bottom: 6px;
  color: ${({theme}) => theme.palette.greyTextLabel};
`;
