import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const Title = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.primaryColor};
`;

export const DateInfo = styled.Text`
  ${({theme}) => theme.typography.p};
  font-family: 'Nunito-Light';
  font-size: 12px;
  margin-bottom: 8px;
`;

export const DescriptionContent = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: justify;
`;

export const ChartContainer = styled.View`
  display: flex;
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const ChartBg = styled.View`
  display: flex;
  height: 30px;
  width: 90%;
  background-color: ${({theme}) => theme.palette.secondaryColor};
  border-radius: 24px;
`;

export const PresentProgressBar = styled.View<ProgressBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: ${({percentage}) => `${percentage}%`};
  background-color: ${({theme}) => theme.palette.primaryColor};
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: ${({percentage}) =>
    percentage >= 95 ? '24px' : '0px'};
  border-bottom-right-radius: ${({percentage}) =>
    percentage === 95 ? '24px' : '0px'};
`;

export const PercentValue = styled.Text<ProgressBarProps>`
  ${({theme}) => theme.typography.p};
  font-size: 16px;
  width: ${({percentage}) => `${percentage > 10 ? percentage + 5 : 10}%`};
  text-align: right;
`;

interface ProgressBarProps {
  percentage: number;
}
