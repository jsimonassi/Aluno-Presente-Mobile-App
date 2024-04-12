/* eslint-disable react-hooks/exhaustive-deps */
import {AUTH_SERVER_BASE_URL} from '@env';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import {useSessionContext} from '../../../contexts/Session';
import {Loader} from '../../../components/Loader';
import {LoaderContainer} from './styles';

export const Logout = () => {
  const {currentSession, logout} = useSessionContext();
  const [isLoading, setIsLoading] = useState(true);
  //TODO: Validar logout com o backend
  const URL =
    AUTH_SERVER_BASE_URL +
      '/v1/auth/connect/logout?id_token_hint=' +
      currentSession?.idToken ??
    '' + '&post_logout_redirect_uri=' + 'alunopresente://oauth';

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <WebView
        onLoad={() => setIsLoading(false)}
        source={{
          uri: URL,
        }}
        style={{display: 'flex', flex: 1}}
      />
    </>
  );
};
