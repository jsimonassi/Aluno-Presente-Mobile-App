import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';
import {ClassNameBigHeader} from './components';
import {ContainerStyled} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {About} from './components/About';
import {useRegisterFrequencyContext} from '../../../contexts/RegisterFrequency';

export const AboutClass = () => {
  const navigator =
    useNavigation<StackNavigationProp<RegisterFrequencyStackParamList>>();
  const route =
    useRoute<RouteProp<RegisterFrequencyStackParamList, 'AboutClass'>>();
  const selectedStudyClass = route.params.selectedClass;
  const {startRegisterFrequency} = useRegisterFrequencyContext();

  //TODO: Verificar no backend se existe uma chamada em andamento.

  const handleStartRegisterFrequency = () => {
    startRegisterFrequency()
      .then(() => {
        navigator.navigate('RegisterFrequencyFlux');
      })
      .catch(err => {
        navigator.goBack();
        console.log(err);
      });
  };

  return (
    <ContainerStyled>
      <ClassNameBigHeader
        className={selectedStudyClass.name}
        teacherName={selectedStudyClass.teacher}
        attendanceAvailable={true}
        onPressAttendance={handleStartRegisterFrequency}
        onPressBack={() => navigator.goBack()}
      />
      <About aboutInfos={selectedStudyClass.about} />
    </ContainerStyled>
  );
};
