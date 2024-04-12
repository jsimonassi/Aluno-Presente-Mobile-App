import styled from 'styled-components/native';
import {FrequencyStatus} from '../../../../../../../types/app/frequency';

export const Container = styled.View`
  display: flex;
  margin-bottom: 8px;
  /* padding: 8px; */
  height: 64px;
  background-color: ${({theme}) => theme.palette.surface2};
  border-radius: 8px;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;

export const CircularDayContainer = styled.View<CircularDayContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, status}) =>
    status === 'Presente'
      ? theme.palette.primaryColor
      : status === 'Faltou'
      ? theme.palette.secondaryColor
      : theme.palette.tertiaryColor};
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex: 1;
  height: 100%;
`;

export const CircularDayText = styled.Text`
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 16px;
  display: flex;
  font-size: 20px;
  line-height: 46px;
`;

interface CircularDayContainerProps {
  status: FrequencyStatus;
}

export const HorizontalInfoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  flex: 2.5;
`;

export const Title = styled.Text`
  ${({theme}) => theme.typography.subtitle};
`;

export const Description = styled.Text`
  ${({theme}) => theme.typography.p};
  font-family: 'Nunito-Light';
  font-size: 12px;
  margin-bottom: 8px;
`;
