import {assets} from '../../assets';

interface AvailableContactsIconType {
  [key: number]: {
    name: string;
    icon: any;
  };
}

export const AVAILABLE_CONTACTS: AvailableContactsIconType = {
  0: {
    name: 'Outros',
    icon: assets.contacts.other,
  },
  1: {
    name: 'E-mail',
    icon: assets.contacts.email,
  },
  2: {
    name: 'Telefone',
    icon: assets.contacts.telephone,
  },
  3: {
    name: 'Celular',
    icon: assets.contacts.cellphone,
  },
  4: {
    name: 'LinkedIn',
    icon: assets.contacts.linkedin,
  },
  5: {
    name: 'GitHub',
    icon: assets.contacts.github,
  },
  6: {
    name: 'Twitter',
    icon: assets.contacts.twitter,
  },
  7: {
    name: 'Facebook',
    icon: assets.contacts.facebook,
  },
  8: {
    name: 'Instagram',
    icon: assets.contacts.instagram,
  },
  9: {
    name: 'TikTok',
    icon: assets.contacts.tiktok,
  },
  10: {
    name: 'Snapchat',
    icon: assets.contacts.snapchat,
  },
  11: {
    name: 'WhatsApp',
    icon: assets.contacts.whatsapp,
  },
  12: {
    name: 'Telegram',
    icon: assets.contacts.telegram,
  },
  13: {
    name: 'Discord',
    icon: assets.contacts.discord,
  },
};
