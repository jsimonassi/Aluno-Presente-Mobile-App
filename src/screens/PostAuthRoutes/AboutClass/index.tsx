import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StudyClassStackParamList} from '../../../types/app/route';
import {ClassNameBigHeader} from './components';
import {ContainerStyled} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {About} from './components/About';

export const AboutClass = () => {
  const navigator =
    useNavigation<StackNavigationProp<StudyClassStackParamList>>();
  const route = useRoute<RouteProp<StudyClassStackParamList, 'AboutClass'>>();
  const selectedStudyClass = route.params.selectedClass;
  //TODO: Verificar no backend se existe uma chamada em andamento.

  const handleRegisterFrequency = () => {
    console.log('Registrar frequência');
  };

  return (
    <ContainerStyled>
      <ClassNameBigHeader
        className={selectedStudyClass.name}
        teacherName={selectedStudyClass.owner}
        attendanceAvailable={false}
        onPressAttendance={handleRegisterFrequency}
        onPressBack={() => navigator.goBack()}
      />
      <About aboutInfos={selectedStudyClass.about} />
    </ContainerStyled>
  );
};
