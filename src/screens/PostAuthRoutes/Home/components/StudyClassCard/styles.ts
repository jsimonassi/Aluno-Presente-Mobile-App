import styled from 'styled-components/native';

export const CardContainerStyled = styled.View<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({theme, isHappingNow}) =>
    isHappingNow ? theme.palette.primaryColor : theme.palette.surface1};
  margin: 8px 24px;
  border-radius: 16px;
  padding: 8px 16px;
  height: ${props => (props.isHappingNow ? '140px' : '90px')};
`;

export const TitleStyled = styled.Text<CardProps>`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme, isHappingNow}) =>
    isHappingNow
      ? theme.palette.fontIconColor
      : theme.typography.subtitle.color};
`;

export const SubtitleStyled = styled.Text<CardProps>`
  ${({theme}) => theme.typography.boldSubtitle};
  color: ${({theme, isHappingNow}) =>
    isHappingNow
      ? theme.palette.surface1
      : theme.typography.boldSubtitle.color};
`;

export const TeacherNameStyled = styled.Text<CardProps>`
  ${({theme}) => theme.typography.p};
  color: ${({theme, isHappingNow}) =>
    isHappingNow ? theme.palette.surface1 : theme.typography.p.color};
`;

export const HappingNowTextStyled = styled.Text`
  ${({theme}) => theme.typography.boldSubtitle};
  color: ${({theme}) => theme.palette.secondaryColor};
`;

interface CardProps {
  isHappingNow: boolean;
}
