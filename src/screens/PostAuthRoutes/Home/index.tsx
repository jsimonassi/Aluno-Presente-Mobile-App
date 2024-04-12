import React, {useEffect, useState} from 'react';
import {RefreshControl, View} from 'react-native';
import EmptyClassList from './components/EmptyClassList';
import {useSessionContext} from '../../../contexts/Session';
import {Api} from '../../../services';
import {StudyClass} from '../../../types/app/class';
import {StudyClassCard} from './components/StudyClassCard';
import {ContainerStyled, InfoText, ScrollViewStyled} from './styles';
import {CustomCalendar} from './components/CustomCalendar';
import {Loader} from '../../../components/Loader';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';
import Header from '../../../components/Header';

export const Home = () => {
  const {currentSession} = useSessionContext();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [studyClassList, setStudyClassList] = useState<StudyClass[] | null>(
    null,
  );
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  useEffect(() => {
    getClassList();
  }, []);

  const getClassList = () => {
    setStudyClassList(null);
    Api.Classes.getMyClasses()
      .then(res => {
        res.sort((a, b) => {
          if (a.isHappingNow === b.isHappingNow) {
            return 0;
          }
          return a.isHappingNow ? -1 : 1;
        });
        setStudyClassList(res);
      })
      .catch(err => {
        setStudyClassList([]);
        console.log(err);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  };

  if (!currentSession) {
    return null;
  }

  const renderContent = () => {
    if (studyClassList === null) {
      return (
        <ContainerStyled>
          <Loader />
        </ContainerStyled>
      );
    }

    if (studyClassList.length === 0) {
      return <EmptyClassList />;
    }

    if (studyClassList.length > 0) {
      return (
        <ScrollViewStyled
          refreshControl={
            <RefreshControl
              style={{
                flex: 1,
                backgroundColor: 'pink',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              refreshing={isRefreshing}
              onRefresh={() => {
                setIsRefreshing(true);
                getClassList();
              }}
              enabled={true}
            />
          }>
          <CustomCalendar />
          {studyClassList.map((studyClass, index) => (
            <StudyClassCard
              key={index}
              currentStudyClass={studyClass}
              onPress={() =>
                navigator.navigate('StudyClassStack', {
                  screen: 'AboutClass',
                  params: {selectedClass: studyClass},
                })
              }
              isHappingNow={studyClass.isHappingNow}
            />
          ))}
          <InfoText>
            Toque em um card para ver o resumo da disciplina ou registrar a
            presença
          </InfoText>
        </ScrollViewStyled>
      );
    }
  };

  return (
    <View>
      <Header />
      {renderContent()}
    </View>
  );
};
