import React, {useMemo} from 'react';
import {ReactNode} from 'react';
import {Container} from './styles';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../../../../../types/app/route';

interface OwnProps {
  iconInactive: ReactNode;
  iconActive: ReactNode;
  screenName: keyof MainTabParamList;
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export const TabItem = ({
  iconInactive,
  iconActive,
  screenName,
  state,
  navigation,
}: OwnProps) => {
  const {itemRouteData, itemIndex} = useMemo(() => {
    const itemIndex = state.routes.findIndex(x => x.name === screenName);
    const itemRouteData = itemIndex === -1 ? null : state.routes[itemIndex];

    return {itemRouteData, itemIndex};
  }, [screenName, state]);

  const isFocused = itemIndex === state.index;

  const onPress = () => {
    if (!itemRouteData) {
      return;
    }
    const event = navigation.emit({
      type: 'tabPress',
      target: itemRouteData.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({
        name: 'MainTab',
        params: {screen: screenName},
        merge: true,
      });
    }
  };

  return (
    <Container onPress={onPress}>
      {isFocused ? iconActive : iconInactive}
    </Container>
  );
};
