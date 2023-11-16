import styled from 'styled-components/native';

interface ContainerProps {
  needIosPadding: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: center;
  background-color: ${({theme}) => theme.palette.primaryColor};
  height: 64px;
  width: 90%;
  margin-bottom: 16px;
  border-radius: 32px;
`;

export const CenterTabStyled = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HistoryIcon = styled.Image`
  width: 26px;
  height: 26px;
  resize-mode: contain;
`;
