import React from 'react';
import {View} from 'react-native';
import HeaderPageTitle from '../../../components/HeaderPageTitle';
import {NotificationEmptyInfo} from './styles';

export const Notifications = () => {
  return (
    <View>
      <HeaderPageTitle pageTitle="Notificações" />
      <NotificationEmptyInfo>
        Nenhuma notificação encontrada.
      </NotificationEmptyInfo>
    </View>
  );
};
