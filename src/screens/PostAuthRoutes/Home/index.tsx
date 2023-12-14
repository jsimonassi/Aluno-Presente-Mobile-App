import React from 'react';
import {View} from 'react-native';
import {Header} from './components';
import EmptyClassList from './components/EmptyClassList';
import {useSessionContext} from '../../../contexts/Session';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';

export const Home = () => {
  const {currentSession} = useSessionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();
  const mockedClassList = [];

  if (!currentSession) {
    return null;
  }

  const renderContent = () => {
    if (mockedClassList.length === 0) {
      return <EmptyClassList />;
    }
  };

  return (
    <View>
      <Header
        currentUser={currentSession.currentUser}
        onPress={() => navigator.navigate('ProfileStack', {screen: 'Profile'})}
      />
      {renderContent()}
    </View>
  );
};
