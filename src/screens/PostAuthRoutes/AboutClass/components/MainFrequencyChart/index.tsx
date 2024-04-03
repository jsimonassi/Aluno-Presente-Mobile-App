import React, {useMemo} from 'react';
import {UserFrequency} from '../../../../../types/app/frequency';
import {
  ChartBg,
  ChartContainer,
  Container,
  DateInfo,
  DescriptionContent,
  PercentValue,
  PresentProgressBar,
  Title,
} from './styles';
import {MainFrequencyLoader} from '../WaitInfoLoaders/MainFrequencyLoader';
import moment from 'moment';

interface MainFrequencyChartProps {
  userFrequency: UserFrequency | null;
}

export const MainFrequencyChart = ({
  userFrequency,
}: MainFrequencyChartProps) => {
  console.log('userFrequency', userFrequency);

  const {totalPresent, totalAbsents, presentPercentage} = useMemo(() => {
    let presentCount = 0;
    let absentCount = 0;

    userFrequency?.frequency.forEach(item => {
      if (item.status === 'Presente') {
        presentCount++;
      } else if (item.status === 'Faltou') {
        absentCount++;
      }
    });

    return {
      totalPresent: presentCount,
      totalAbsents: absentCount,
      presentPercentage:
        presentCount + absentCount > 0
          ? (presentCount / (presentCount + absentCount)) * 100
          : 0,
    };
  }, [userFrequency]);

  if (!userFrequency) {
    return (
      <Container>
        <MainFrequencyLoader />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Minha frequência:</Title>
      <DateInfo>
        Última atualização:{' '}
        {moment(userFrequency.updatedAt).format('DD/MM/YYYY-HH:mm')}
      </DateInfo>
      <ChartContainer>
        <ChartBg>
          <PresentProgressBar percentage={presentPercentage} />
          <PercentValue percentage={presentPercentage}>
            {presentPercentage.toFixed(0) ?? 0}%
          </PercentValue>
        </ChartBg>
      </ChartContainer>
      <DescriptionContent>
        Você possui um total de{' '}
        <DescriptionContent style={{fontWeight: 'bold'}}>
          {totalPresent}{' '}
        </DescriptionContent>
        presenças e{' '}
        <DescriptionContent style={{fontWeight: 'bold'}}>
          {totalAbsents}
        </DescriptionContent>{' '}
        faltas nessa disciplina
      </DescriptionContent>
    </Container>
  );
};
