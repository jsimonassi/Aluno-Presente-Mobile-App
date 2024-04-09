import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/Header';
import {MainButton} from '../../../components/Buttons';
import {ButtonsGroup, ContentContainer, SelectorContainer} from './styles';
import {ListSelector} from '../../../components/ListSelector';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';

const AVAILABLE_OPTIONS = [
  {
    label: 'Termos de uso',
    action: 'https://www.google.com',
  },
  {
    label: 'Política de privacidade',
    action: 'https://www.google.com',
  },
  {
    label: 'Consentimento de uso',
    action: 'https://www.google.com',
  },
  {
    label: 'Sobre',
    action: 'https://www.google.com',
  },
];

export const Profile = () => {
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  const handleOptionSelect = (index: number) => {
    const selectedOption = AVAILABLE_OPTIONS[index];
    if (selectedOption.label !== 'Sobre') {
      navigator.navigate('ProfileStack', {
        screen: 'GenericWebView',
        params: {
          url: selectedOption.action,
          title: selectedOption.label,
        },
      });
      return;
    }
  };

  return (
    <View>
      <Header welcomeStyle={false} />
      <ContentContainer>
        <SelectorContainer>
          <ListSelector
            items={Object.values(AVAILABLE_OPTIONS).map(option => option.label)}
            onSelect={(_, index) => handleOptionSelect(index)}
          />
        </SelectorContainer>
        <ButtonsGroup>
          <MainButton text="Excluir conta" onPress={() => null} type="danger" />
          <MainButton text="Sair" onPress={() => null} />
        </ButtonsGroup>
      </ContentContainer>
    </View>
  );
};
