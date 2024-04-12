import React from 'react';
import {
  BodyInfosContainerStyled,
  ContainerStyled,
  FooterContainerStyled,
  TeacherNameStyled,
  TipTextStyled,
} from './styles';
import {MainButton} from '../../../../../components/Buttons';
import {LetterProfileImage} from '../../../../../components/LetterProfileImage';
import {AttendanceInProgressModel} from '../../../../../types/api/Attendance';
import {PageTitle} from '../../../../../components/PageTitle';

interface ClassNameBigHeaderProps {
  className: string;
  teacherName: string;
  attendanceAvailable: AttendanceInProgressModel | null;
  onPressBack: () => void;
  onPressAttendance: () => void;
  onPressTeacherProfile: () => void;
}

export const ClassNameBigHeader = ({
  className,
  teacherName,
  attendanceAvailable,
  onPressBack,
  onPressAttendance,
  onPressTeacherProfile,
}: ClassNameBigHeaderProps) => {
  return (
    <ContainerStyled>
      <PageTitle title={className} onBackPress={onPressBack} showBackIcon />
      <BodyInfosContainerStyled onPress={onPressTeacherProfile}>
        <LetterProfileImage name={teacherName.charAt(0).toLocaleUpperCase()} />
        <TeacherNameStyled>{teacherName}</TeacherNameStyled>
        <TipTextStyled>Toque para acessar o perfil do professor</TipTextStyled>
      </BodyInfosContainerStyled>
      <FooterContainerStyled>
        <MainButton
          onPress={onPressAttendance}
          text="Registrar presença"
          type="secondary"
          disabled={
            attendanceAvailable === null ||
            attendanceAvailable.status === 'NOT_STARTED'
          }
          loading={attendanceAvailable == null}
        />
      </FooterContainerStyled>
    </ContainerStyled>
  );
};
