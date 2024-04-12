import styled from 'styled-components/native';

export const CardBackground = styled.TouchableOpacity`
  display: flex;
  background-color: ${({theme}) => theme.palette.surface1};
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 16px;
  flex-direction: row;
  box-sizing: border-box;
`;

export const ProfileImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 30px;
`;

export const InfosContainer = styled.View`
  display: flex;
  flex: 1;
  margin-left: 16px;
`;

export const NameText = styled.Text`
  ${({theme}) => theme.typography.subtitle};
  color: ${({theme}) => theme.palette.primaryColor};
`;

export const DescriptionText = styled.Text`
  ${({theme}) => theme.typography.p};
  color: ${({theme}) => theme.palette.greyTextLabel};
  margin-top: 4px;
`;
