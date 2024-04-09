import React from 'react';
import {
  CircularDayContainer,
  CircularDayText,
  Container,
  Description,
  HorizontalInfoContainer,
  Title,
} from './styles';
import {FrequencyStatus} from '../../../../../../../types/app/frequency';
import moment from 'moment';

interface AttendanceCardProps {
  date: string;
  status: FrequencyStatus;
}

export const AttendanceCard = ({date, status}: AttendanceCardProps) => {
  return (
    <Container>
      <CircularDayContainer status={status}>
        <CircularDayText>{moment(date).format('HH:mm')}</CircularDayText>
      </CircularDayContainer>
      <HorizontalInfoContainer>
        <Title>{moment(date).format('DD/MM/YYYY HH:mm')}</Title>
        <Description>{status}</Description>
      </HorizontalInfoContainer>
    </Container>
  );
};
