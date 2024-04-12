import React from 'react';
import {
  CardBackground,
  DescriptionText,
  InfosContainer,
  NameText,
  ProfileImage,
} from './styles';
import {Linking} from 'react-native';

interface DevCardProps {
  imageUrl: string;
  name: string;
  profileUrl: string;
  description: string;
}

export const DevCard = ({
  imageUrl,
  name,
  profileUrl,
  description,
}: DevCardProps) => {
  return (
    <CardBackground onPress={() => Linking.openURL(profileUrl)}>
      <ProfileImage source={{uri: imageUrl}} />
      <InfosContainer>
        <NameText>{name}</NameText>
        <DescriptionText>{description}</DescriptionText>
      </InfosContainer>
    </CardBackground>
  );
};
