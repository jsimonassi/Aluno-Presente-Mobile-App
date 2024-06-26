/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {MainText} from '../../../components/Text';
import {GradientBackground} from '../../../components/Background';
import {Container, LoaderContainer} from './styles';
import {View} from 'react-native';
import {MainButton} from '../../../components/Buttons';
import {Constants} from '../../../constants';
import {useTheme} from 'styled-components/native';
import {PresentationCarrousel} from './components/PresentationCarrousel';
import {authorize} from 'react-native-app-auth';
import {AUTH_CLIENT_ID, AUTH_SERVER_BASE_URL} from '@env';
import {useSessionContext} from '../../../contexts/Session';
import {TokenSession} from '../../../types/api/Session';
import {Loader} from '../../../components/Loader';
import {Api} from '../../../services';

export const Login = () => {
  const appTheme = useTheme();
  const {setCurrentSession} = useSessionContext();
  const [isLoading, setIsLoading] = useState(false);

  // base config
  const config = {
    issuer: AUTH_SERVER_BASE_URL + '/v1/auth/',
    clientId: AUTH_CLIENT_ID,
    redirectUrl: 'alunopresente://oauth',
    scopes: ['read', 'profile', 'openid'],
  };

  const handleLogin = async () => {
    setTimeout(() => {
      setIsLoading(true);
    }, 300);
    try {
      const result = await authorize(config);
      Api.setAuthToken(result.accessToken);
      const currentUser = await Api.Session.getCurrentUser();
      const session: TokenSession = {
        ...result,
        currentUser: currentUser,
      };
      setCurrentSession(session);
    } catch (error) {
      //TODO: Is important to handle this error in a better way?
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <GradientBackground>
      <Container>
        <View>
          <PresentationCarrousel />
          <MainText
            style={{
              color: appTheme.palette.fontIconBackgroundColor,
              fontSize: 20,
              textAlign: 'center',
              marginHorizontal: 50,
              fontFamily: 'Nunito-ExtraLight',
            }}>
            {Constants.MESSAGES.LOGIN_MESSAGES.PRESENTATION}
          </MainText>
        </View>
        <MainButton text="Iniciar" onPress={handleLogin} type="secondary" />
      </Container>
    </GradientBackground>
  );
};
