import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../../components/Header';
import {MainButton} from '../../../components/Buttons';
import {
  ButtonsGroup,
  ContentContainer,
  LoaderContainer,
  SelectorContainer,
} from './styles';
import {ListSelector} from '../../../components/ListSelector';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';
import {PRIVACY_POLICY_PAGE_URL, CONSENT_PAGE_URL, TERMS_PAGE_URL} from '@env';
import {useSessionContext} from '../../../contexts/Session';
import {Loader} from '../../../components/Loader';

const AVAILABLE_OPTIONS = [
  {
    label: 'Termos de uso',
    action: TERMS_PAGE_URL,
  },
  {
    label: 'Política de privacidade',
    action: PRIVACY_POLICY_PAGE_URL,
  },
  {
    label: 'Consentimento de uso',
    action: CONSENT_PAGE_URL,
  },
  {
    label: 'Sobre',
    action: '',
  },
];

export const Profile = () => {
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();
  const {logout} = useSessionContext();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <Header welcomeStyle={false} />
      <ContentContainer>
        <SelectorContainer>
          <ListSelector
            items={Object.values(AVAILABLE_OPTIONS).map(option => option.label)}
            onSelect={(_, index) => handleOptionSelect(index)}
          />
        </SelectorContainer>
        <ButtonsGroup>
          {/* <MainButton text="Excluir conta" onPress={() => null} type="danger" /> */}
          <MainButton text="Sair" onPress={handleLogout} type="danger" />
        </ButtonsGroup>
      </ContentContainer>
    </View>
  );
};
