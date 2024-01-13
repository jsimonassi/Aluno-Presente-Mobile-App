import React, {useMemo} from 'react';
import {
  CardContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TitleContainerStyled,
  DateContainerStyled,
  WeekTextDayStyled,
  WeekDayStyled,
  ItemDateContainerStyled,
} from './styles';

import 'moment/locale/pt-br';
import moment from 'moment';

interface DayItem {
  numberDay: string;
  stringDay: string;
  isToday: boolean;
}

export const CustomCalendar = () => {
  const daysOfWeek: DayItem[] = useMemo(() => {
    const startOfWeek = moment().startOf('week');
    const week: DayItem[] = [];

    for (let i = 0; i < 7; i++) {
      const currentMomentDay = startOfWeek.clone().add(i, 'days');
      const currentDay: DayItem = {
        numberDay: currentMomentDay.format('D'),
        stringDay: currentMomentDay.format('ddd').charAt(0).toUpperCase(),
        isToday: currentMomentDay.isSame(moment(), 'day'),
      };

      week.push(currentDay);
    }

    return week;
  }, []);

  return (
    <CardContainerStyled>
      <TitleContainerStyled>
        <TitleStyled>Aulas</TitleStyled>
        <SubtitleStyled> Esta semana</SubtitleStyled>
      </TitleContainerStyled>
      <DateContainerStyled>
        {daysOfWeek.map((day, index) => (
          <ItemDateContainerStyled key={index}>
            <WeekTextDayStyled>{day.stringDay}</WeekTextDayStyled>
            <WeekDayStyled isCurrentDay={day.isToday}>
              {day.numberDay}
            </WeekDayStyled>
          </ItemDateContainerStyled>
        ))}
      </DateContainerStyled>
    </CardContainerStyled>
  );
};
