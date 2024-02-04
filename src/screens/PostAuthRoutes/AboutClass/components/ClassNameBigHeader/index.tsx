import React from 'react';
import {
  BodyInfosContainerStyled,
  ContainerStyled,
  FooterContainerStyled,
  HeaderContainerStyled,
  HeaderIconStyled,
  HeaderTextStyled,
  TeacherNameStyled,
  TipTextStyled,
} from './styles';
import {assets} from '../../../../../assets';
import {MainButton} from '../../../../../components/Buttons';
import {LetterProfileImage} from '../../../../../components/LetterProfileImage';
import {Pressable} from 'react-native';

interface ClassNameBigHeaderProps {
  className: string;
  teacherName: string;
  attendanceAvailable: boolean | null;
  onPressBack: () => void;
  onPressAttendance: () => void;
}

export const ClassNameBigHeader = ({
  className,
  teacherName,
  attendanceAvailable,
  onPressBack,
  onPressAttendance,
}: ClassNameBigHeaderProps) => {
  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Pressable onPress={onPressBack}>
          <HeaderIconStyled showBackIcon source={assets.general.backIcon} />
        </Pressable>
        <HeaderTextStyled>{className}</HeaderTextStyled>
        <HeaderIconStyled source={assets.general.backIcon} />
      </HeaderContainerStyled>
      <BodyInfosContainerStyled>
        <LetterProfileImage name={teacherName.charAt(0).toLocaleUpperCase()} />
        <TeacherNameStyled>{teacherName}</TeacherNameStyled>
        <TipTextStyled>Toque para acessar o perfil do professor</TipTextStyled>
      </BodyInfosContainerStyled>
      <FooterContainerStyled>
        <MainButton
          onPress={onPressAttendance}
          text="Registrar presença"
          type="secondary"
          disabled={!attendanceAvailable}
          loading={attendanceAvailable == null}
        />
      </FooterContainerStyled>
    </ContainerStyled>
  );
};
