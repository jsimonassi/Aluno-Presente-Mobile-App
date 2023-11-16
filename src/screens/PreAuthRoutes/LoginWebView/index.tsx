/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState} from 'react';
import WebView from 'react-native-webview';
import {Loader} from '../../../components/Loader';
import {LoadingContainer} from './styles';
import {useSessionContext} from '../../../contexts/Session';
import {Helpers} from '../../../helpers';
import {useNavigation} from '@react-navigation/native';
import {IChallenge} from 'react-native-pkce-challenge/lib/typescript/utils';

export const LoginWebView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pkceChallenge = useRef<IChallenge>(
    Helpers.CodeGenerator.generatePkceChallenge(),
  );
  const sessionContext = useSessionContext();
  const authUrl = sessionContext.generateLoginUrl(
    'https://alunopresente.vercel.app/post-login',
    pkceChallenge.current.codeChallenge,
  );
  const navigation = useNavigation();

  const finishLogin = (url: URL) => {
    const code = url.searchParams.get('code') ?? '';

    sessionContext
      .getAccessToken(code, pkceChallenge.current.codeVerifier)
      .then(() => {
        console.log('Access token obtained');
      })
      .catch(err => {
        console.log('Error getting access token: ', err);
        navigation.goBack();
      });
  };

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
      <WebView
        onLoad={({nativeEvent}) => {
          const responseUrl = new URL(nativeEvent.url);
          if (responseUrl.searchParams.has('code')) {
            setIsLoading(true);
            finishLogin(responseUrl);
          } else {
            setIsLoading(false);
          }
        }}
        style={{
          display: isLoading ? 'none' : 'flex',
        }}
        source={{
          uri: authUrl,
        }}
      />
    </>
  );
};
