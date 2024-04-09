/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  ContactsContainer,
  ContainerStyled,
  InfoGroupContainer,
  PageContainer,
  TeacherNameStyled,
} from './style';
import {PageTitle} from '../../../components/PageTitle';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Api} from '../../../services';
import {StackNavigationProp} from '@react-navigation/stack';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';
import {TeacherInfo} from '../../../types/api/Teacher';
import {LetterProfileImage} from '../../../components/LetterProfileImage';
import {ContactCard} from './components/ContactCard';
import {TeacherNameLoader} from './components/WaitInfoLoaders/TeacherNameLoader';
import {InfoLoader} from './components/WaitInfoLoaders/InfoLoader';

export const TeacherProfile = () => {
  const navigator =
    useNavigation<StackNavigationProp<RegisterFrequencyStackParamList>>();
  const route =
    useRoute<RouteProp<RegisterFrequencyStackParamList, 'TeacherProfile'>>();
  const teacherEmail = route.params.teacherEmail;
  const [teacherInfo, setTeacherInfo] = useState<TeacherInfo | null>(null);

  useEffect(() => {
    Api.Teacher.getTeacher(teacherEmail)
      .then(teacher => {
        setTeacherInfo(teacher);
      })
      .catch(() => navigator.goBack());
  }, []);

  return (
    <PageContainer>
      <ContainerStyled>
        <PageTitle
          onBackPress={navigator.goBack}
          title="Sobre o professor"
          showBackIcon
        />
        <InfoGroupContainer>
          {teacherInfo === null ? (
            <>
              <TeacherNameLoader />
            </>
          ) : (
            <>
              <LetterProfileImage
                name={teacherInfo.name.charAt(0).toLocaleUpperCase()}
              />
              <TeacherNameStyled>{teacherInfo.name}</TeacherNameStyled>
            </>
          )}
        </InfoGroupContainer>
      </ContainerStyled>
      {teacherInfo === null ? (
        <>
          <InfoLoader />
          <InfoLoader />
          <InfoLoader />
        </>
      ) : (
        <>
          <AboutContainer>
            <AboutTitle>Sobre:</AboutTitle>
            <AboutContent>
              {teacherInfo.info.about !== ''
                ? teacherInfo.info.about
                : 'Nenhuma informação adicionada pelo professor.'}
            </AboutContent>
          </AboutContainer>
          <ContactsContainer>
            <AboutTitle>Contatos:</AboutTitle>
            {teacherInfo.info.contacts.map((item, index) => {
              return <ContactCard key={index} contact={item} />;
            })}
          </ContactsContainer>
        </>
      )}
    </PageContainer>
  );
};
