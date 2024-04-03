import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const Title = styled.Text`
  ${({theme}) => theme.typography.subtitle};
`;

export const DateInfo = styled.Text`
  ${({theme}) => theme.typography.p};
  font-family: 'Nunito-Light';
  font-size: 12px;
  margin-bottom: 8px;
`;

export const CalendarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LegendContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const DescriptionContent = styled.Text`
  ${({theme}) => theme.typography.p};
  margin-bottom: 8px;
`;

export const LegendItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 90%;
  margin-bottom: 8px;
`;

export const ColorCircle = styled.View<ColorCircleProps>`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({color}) => color};
  margin-right: 8px;
`;

export const LegendText = styled.Text`
  ${({theme}) => theme.typography.p};
`;
interface ColorCircleProps {
  color: string;
}
