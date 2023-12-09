import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10%;
  padding-bottom: 10%;
  padding-top: 20%;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  align-items: center;
  justify-content: center;
`;
