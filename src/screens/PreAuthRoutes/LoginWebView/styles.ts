import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
`;
