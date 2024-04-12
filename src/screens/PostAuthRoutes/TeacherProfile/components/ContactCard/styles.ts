import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  background-color: ${({theme}) => theme.palette.primaryColor};
  height: 65px;
  flex-direction: row;
  margin-top: 8px;
  border-radius: 16px;
`;

export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const InfosContainer = styled.View`
  display: flex;
  justify-content: center;
  flex: 4;
`;

export const Title = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
`;

export const ContactValue = styled.Text`
  ${({theme}) => theme.typography.p};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  opacity: 0.5;
`;
