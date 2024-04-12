import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {CenterTabStyled, Container, HistoryIcon} from './styles';
import {TabItem} from './TabItem';
import {assets} from '../../../../assets';

export const CustomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <CenterTabStyled>
      <Container needIosPadding={false}>
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
        {/* <TabItem
          screenName="NewClass"
          iconInactive={<HistoryIcon source={assets.home.newClassDisabled} />}
          iconActive={<HistoryIcon source={assets.home.newClassEnabled} />}
          state={state}
          navigation={navigation}
        /> */}
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
