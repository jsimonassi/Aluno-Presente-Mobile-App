import styled from 'styled-components/native';

export const PageContainer = styled.ScrollView`
  display: flex;
  padding: 8px;
`;

export const ContainerStyled = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.palette.primaryColor};
  border-radius: 32px;
  min-height: 200px;
  padding: 16px;
  justify-content: space-between;
`;

export const TeacherNameStyled = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.fontIconBackgroundColor};
  font-size: 20px;
  margin-top: 8px;
`;

export const InfoGroupContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const AboutContainer = styled.View`
  display: flex;
  margin: 8px;
  margin-top: 16px;
`;

export const AboutTitle = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.primaryColor};
`;

export const AboutContent = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: justify;
`;

export const ContactsContainer = styled.View`
  display: flex;
  margin: 8px;
`;
