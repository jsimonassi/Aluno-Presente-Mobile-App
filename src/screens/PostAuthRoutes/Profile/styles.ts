import styled from 'styled-components/native';

export const ContentContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const ButtonsGroup = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 115px;
`;

export const SelectorContainer = styled.View`
  width: 90%;
  margin-bottom: 30px;
`;

export const LoaderContainer = styled.View`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
