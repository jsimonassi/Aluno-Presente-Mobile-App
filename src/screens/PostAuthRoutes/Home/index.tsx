import React from 'react';
import {View} from 'react-native';
import {Header} from './components';
import {User} from '../../../types/api/User';
import EmptyClassList from './components/EmptyClassList';

export const Home = () => {
  const mockedUser: User = {
    name: 'João Victor Simonassi',
    school: 'Universidade Federal Fluminense',
  };

  const mockedClassList = [];

  const renderContent = () => {
    if (mockedClassList.length === 0) {
      return <EmptyClassList />;
    }
  };

  return (
    <View>
      <Header currentUser={mockedUser} />
      {renderContent()}
    </View>
  );
};
