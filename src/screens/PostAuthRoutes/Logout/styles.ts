import styled from 'styled-components/native';

export const LoaderContainer = styled.View`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
