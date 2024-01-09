import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header} from './components';
import EmptyClassList from './components/EmptyClassList';
import {useSessionContext} from '../../../contexts/Session';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';
import {Api} from '../../../services';
import {StudyClass} from '../../../types/app/class';
import {StudyClassCard} from './components/StudyClassCard';
import {InfoText} from './styles';
import {CustomCalendar} from './components/CustomCalendar';

export const Home = () => {
  const {currentSession} = useSessionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();
  const [studyClassList, setStudyClassList] = useState<StudyClass[]>([]);

  useEffect(() => {
    Api.Classes.getMyClasses().then(res => {
      setStudyClassList(res);
    });
  }, []);

  if (!currentSession) {
    return null;
  }

  const renderContent = () => {
    if (studyClassList.length === 0) {
      return <EmptyClassList />;
    }
    if (studyClassList.length > 0) {
      return (
        <View>
          <CustomCalendar />
          {studyClassList.map((studyClass, index) => (
            <StudyClassCard
              key={index}
              currentStudyClass={studyClass}
              onPress={() => null}
            />
          ))}
          <InfoText>
            Toque em um card para ver o resumo da disciplina ou registrar a
            presença
          </InfoText>
        </View>
      );
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
