import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
// import {Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import {CenterTabStyled, Container, HistoryIcon} from './styles';
import {TabItem} from './TabItem';
import {assets} from '../../../../assets';

export const CustomTabBar = ({state, navigation}: BottomTabBarProps) => {
  //   const pairingStore = usePairingContext();

  // const needIosPadding = useMemo(() => {
  //   if (Platform.OS === 'android') {
  //     return false;
  //   }

  //   const systemVersion = DeviceInfo.getModel();
  //   const iPhoneVersionString = systemVersion.replace(/[^\d]+/g, '');
  //   const iPhoneVersion = iPhoneVersionString
  //     ? parseInt(iPhoneVersionString)
  //     : null;

  //   if (
  //     (iPhoneVersion !== null && iPhoneVersion <= 9) ||
  //     systemVersion === 'iPhone SE'
  //   ) {
  //     return false;
  //   }

  //   return true;
  // }, []);

  //   const isMinimalMenuMode =
  //     pairingStore.data.lastPairedDeviceModel === DEVICE_MODEL.NONE;

  return (
    <CenterTabStyled>
      <Container>
        <TabItem
          screenName="Home"
          iconInactive={<HistoryIcon source={assets.home.homeDisabled} />}
          iconActive={<HistoryIcon source={assets.home.homeEnabled} />}
          state={state}
          navigation={navigation}
        />
        <TabItem
          screenName="Notifications"
          iconInactive={
            <HistoryIcon source={assets.home.notificationDisabled} />
          }
          iconActive={<HistoryIcon source={assets.home.notificationEnabled} />}
          state={state}
          navigation={navigation}
        />
        <TabItem
          screenName="NewClass"
          iconInactive={<HistoryIcon source={assets.home.newClassDisabled} />}
          iconActive={<HistoryIcon source={assets.home.newClassEnabled} />}
          state={state}
          navigation={navigation}
        />
        <TabItem
          screenName="Profile"
          iconInactive={<HistoryIcon source={assets.home.profileDisabled} />}
          iconActive={<HistoryIcon source={assets.home.profileEnabled} />}
          state={state}
          navigation={navigation}
        />
      </Container>
    </CenterTabStyled>
  );
};
