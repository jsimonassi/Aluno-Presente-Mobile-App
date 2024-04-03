/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';
import {ClassNameBigHeader} from './components';
import {ContainerStyled, TipInfo} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {About} from './components/About';
import {useRegisterFrequencyContext} from '../../../contexts/RegisterFrequency';
import {AttendanceInProgressModel} from '../../../types/api/Attendance';

export const AboutClass = () => {
  const navigator =
    useNavigation<StackNavigationProp<RegisterFrequencyStackParamList>>();
  const route =
    useRoute<RouteProp<RegisterFrequencyStackParamList, 'AboutClass'>>();
  const selectedStudyClass = route.params.selectedClass;
  const {startRegisterFrequency, checkAttendanceInProgress} =
    useRegisterFrequencyContext();
  const [attendanceAvailable, setAttendanceAvailable] =
    useState<AttendanceInProgressModel | null>(null);

  useEffect(() => {
    checkAttendanceInProgress(selectedStudyClass.id)
      .then(attendanceInfos => {
        setAttendanceAvailable(attendanceInfos);
      })
      .catch(() => setAttendanceAvailable(null));
  }, []);

  const handleStartRegisterFrequency = () => {
    startRegisterFrequency(attendanceAvailable)
      .then(() => {
        if (attendanceAvailable) {
          navigator.navigate('RegisterFrequencyFlux', {
            selectedClass: selectedStudyClass,
            attendanceInfos: attendanceAvailable,
          });
        }
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
        teacherName={selectedStudyClass.teacher.name}
        attendanceAvailable={attendanceAvailable}
        onPressAttendance={handleStartRegisterFrequency}
        onPressBack={() => navigator.goBack()}
      />
      <TipInfo>
        Quando o professor iniciar a chamada, o registro de presença ficará
        disponível.
      </TipInfo>
      <About aboutInfos={selectedStudyClass.about} />
    </ContainerStyled>
  );
};
