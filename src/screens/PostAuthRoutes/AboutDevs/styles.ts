import styled from 'styled-components/native';

export const PageScrollContainer = styled.ScrollView`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const PageContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.palette.pageBackgroundColor};
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

export const ButtonGroup = styled.View`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
  height: 110px;
  margin-bottom: 64px;
`;

export const InfosContainer = styled.View`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const LogoImage = styled.Image`
  height: 110px;
  object-fit: contain;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const VersionText = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: center;
`;

export const DescriptionText = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const DevelopersTitle = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.primaryColor};
  text-align: center;
  margin-bottom: 24px;
`;
