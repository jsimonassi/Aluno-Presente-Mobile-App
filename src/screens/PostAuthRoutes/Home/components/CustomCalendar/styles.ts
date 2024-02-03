import styled from 'styled-components/native';

export const CardContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 8px 16px;
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

export const DateContainerStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const ItemDateContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeekTextDayStyled = styled.Text`
  ${({theme}) => theme.typography.p};
  font-size: 12px;
`;

export const WeekDayStyled = styled.Text<WeekDayStyledProps>`
  ${({theme}) => theme.typography.title};
  font-size: 22px;
  margin-top: 4px;
  border-radius: 8px;
  border: ${({theme, isCurrentDay}) =>
    isCurrentDay ? `1px solid ${theme.palette.primaryColor}` : 'none'};
  background-color: ${({theme, isCurrentDay}) =>
    isCurrentDay ? theme.palette.primaryColor : 'transparent'};
  color: ${({theme, isCurrentDay}) =>
    isCurrentDay ? theme.palette.fontIconColor : theme.palette.primaryColor};
  padding: 4px 2px;
`;

interface WeekDayStyledProps {
  isCurrentDay: boolean;
}
