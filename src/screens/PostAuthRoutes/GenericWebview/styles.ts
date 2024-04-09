import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: flex;
  flex: 1;
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
