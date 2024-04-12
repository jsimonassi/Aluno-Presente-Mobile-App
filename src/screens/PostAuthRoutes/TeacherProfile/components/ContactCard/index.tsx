import React from 'react';
import {Contact} from '../../../../../types/api/Teacher';
import {
  CardContainer,
  ContactValue,
  IconContainer,
  InfosContainer,
  Title,
} from './styles';
import {AVAILABLE_CONTACTS} from '../../../../../constants/contacts';
import {AppIcon} from '../ContactIcon';
import {Linking} from 'react-native';

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({contact}: ContactCardProps) => {
  const onPress = () => {
    console.log('contact', contact);
    switch (contact.type) {
      case 'Email':
        Linking.openURL(`mailto:${contact.value}`);
        break;
      case 'Phone':
      case 'Cellphone':
        Linking.openURL(`tel:${contact.value}`);
        break;
      case 'LinkedIn':
      case 'GitHub':
      case 'Twitter':
      case 'Facebook':
      case 'Instagram':
      case 'TikTok':
      case 'Snapchat':
      case 'WhatsApp':
      case 'Telegram':
        Linking.openURL(contact.value);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer onPress={onPress}>
      <IconContainer>
        <AppIcon Icon={AVAILABLE_CONTACTS[contact.id]?.icon} />
      </IconContainer>
      <InfosContainer>
        <Title>{contact.type}</Title>
        <ContactValue>{contact.value}</ContactValue>
      </InfosContainer>
    </CardContainer>
  );
};
