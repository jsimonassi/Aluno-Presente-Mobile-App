import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({theme}) => theme.palette.surface1};
`;

export const TitleContainer = styled.View`
  display: flex;
  width: 100%;
  background-color: ${({theme}) => theme.palette.primaryColor};
  height: 80px;
  justify-content: center;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

export const LoaderContainer = styled.View`
  display: flex;
  position: absolute;
  width: 100%;
  height: 90%;
  margin-top: 80px;
  z-index: 1;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
