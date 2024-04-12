/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useState} from 'react';
import {Frequency, UserFrequency} from '../../../../../types/app/frequency';
import {
  CalendarContainer,
  ColorCircle,
  Container,
  DateInfo,
  DescriptionContent,
  LegendContainer,
  LegendItemContainer,
  LegendText,
  TipInfo,
  Title,
} from './styles';
import moment from 'moment';
import {DetailedFrequencyLoader} from '../WaitInfoLoaders/DetailedFrequencyLoader';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useTheme} from 'styled-components/native';
import {AttendanceCard} from './components/AttendanceCard';
import {MainButton} from '../../../../../components/Buttons';

interface DetailedFrequencyProps {
  userFrequency: UserFrequency | null;
}

export const DetailedFrequency = ({userFrequency}: DetailedFrequencyProps) => {
  const currentTheme = useTheme();
  const [selectedDate, setSelectedDate] = useState<Frequency[]>([]);

  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar.',
      'Abr.',
      'Mai.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje',
  };

  LocaleConfig.defaultLocale = 'pt-br';

  const markedDates = useMemo(() => {
    const dates = {} as any;

    userFrequency?.frequency.forEach(item => {
      const formattedDate = moment(item.date).format('YYYY-MM-DD');
      if (!dates[formattedDate]) {
        dates[formattedDate] = {
          selected: true,
          selectedColor: currentTheme.palette.primaryColor,
        };
      }

      if (item.status === 'Faltou') {
        dates[formattedDate].selectedColor =
          currentTheme.palette.secondaryColor;
      } else if (
        item.status === 'Não inscrito' &&
        dates[formattedDate].selectedColor !==
          currentTheme.palette.secondaryColor
      ) {
        dates[formattedDate].selectedColor = currentTheme.palette.tertiaryColor;
      }
    });
    return dates;
  }, [userFrequency]);

  if (!userFrequency) {
    return (
      <Container>
        <DetailedFrequencyLoader />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Frequência detalhada:</Title>
      <DateInfo>
        Última atualização:{' '}
        {moment(userFrequency.updatedAt).format('DD/MM/YYYY HH:mm')}
      </DateInfo>
      <CalendarContainer>
        <Calendar
          style={{
            width: 320,
            height: 350,
          }}
          theme={{
            backgroundColor: currentTheme.palette.pageBackgroundColor,
            calendarBackground: currentTheme.palette.fontIconBackgroundColor,
            textSectionTitleColor: currentTheme.palette.greyTextLabel,
            selectedDayTextColor: '#ffffff',
            todayTextColor: currentTheme.palette.primaryColor,
            // todayBackgroundColor: currentTheme.palette.tertiaryColor,
            dayTextColor: currentTheme.palette.primaryColor,
            textDisabledColor: '#d9e1e8',
            arrowColor: currentTheme.palette.primaryColor,
            monthTextColor: currentTheme.palette.primaryColor,
            textDayFontFamily: 'Nunito-Regular',
            textMonthFontFamily: 'Nunito-Bold',
          }}
          horizontal={true}
          pagingEnabled={true}
          current={'2024-04-03'}
          markedDates={markedDates}
          onDayPress={day => {
            setSelectedDate(
              userFrequency.frequency.filter(
                item =>
                  moment(item.date).format('YYYY-MM-DD') === day.dateString,
              ),
            );
          }}
        />
      </CalendarContainer>
      <LegendContainer>
        <TipInfo>Selecione o dia para verificar todas as frequências</TipInfo>
        {selectedDate.length > 0 && (
          <>
            {selectedDate.map((item, index) => (
              <AttendanceCard
                key={index}
                date={item.date}
                status={item.status}
              />
            ))}
            <MainButton
              type="secondary"
              onPress={() => setSelectedDate([])}
              text="Limpar seleção"
              textStyles={{
                textDecorationLine: 'underline',
                textDecorationColor: currentTheme.palette.primaryColor,
              }}
            />
          </>
        )}
        <DescriptionContent>Legenda:</DescriptionContent>
        <LegendItemContainer>
          <ColorCircle color={currentTheme.palette.primaryColor} />
          <LegendText>Presença</LegendText>
        </LegendItemContainer>
        <LegendItemContainer>
          <ColorCircle color={currentTheme.palette.secondaryColor} />
          <LegendText>Falta</LegendText>
        </LegendItemContainer>
        <LegendItemContainer>
          <ColorCircle color={currentTheme.palette.tertiaryColor} />
          <LegendText>Não inscrito</LegendText>
        </LegendItemContainer>
      </LegendContainer>
    </Container>
  );
};
