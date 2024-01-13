import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header} from './components';
import EmptyClassList from './components/EmptyClassList';
import {useSessionContext} from '../../../contexts/Session';
import {Api} from '../../../services';
import {StudyClass} from '../../../types/app/class';
import {StudyClassCard} from './components/StudyClassCard';
import {ContainerStyled, InfoText} from './styles';
import {CustomCalendar} from './components/CustomCalendar';
import {Loader} from '../../../components/Loader';

export const Home = () => {
  const {currentSession} = useSessionContext();
  const [studyClassList, setStudyClassList] = useState<StudyClass[] | null>(
    null,
  );

  useEffect(() => {
    Api.Classes.getMyClasses().then(res => {
      setStudyClassList(res);
    });
  }, []);

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
      <Header />
      {renderContent()}
    </View>
  );
};
