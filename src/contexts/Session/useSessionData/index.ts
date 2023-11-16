import {useState} from 'react';
import {AUTH_SERVER_BASE_URL, AUTH_CLIENT_ID} from '@env';
import {Api, Storage} from '../../../services';
import {TokenRequestConfig, TokenSession} from '../../../types/api/Session';

const CACHE_SESSION_KEY = 'session_cache_key';

export const useSessionData = () => {
  const [currentSession, setCurrentSession] = useState<TokenSession | null>(
    {} as TokenSession,
  );

  const generateLoginUrl = (redirectUrl: string, codeChallenge: string) => {
    const loginUrl =
      AUTH_SERVER_BASE_URL +
      '/v1/auth/oauth2/authorize?response_type=code&client_id=' +
      AUTH_CLIENT_ID +
      '&scope=openid%20read%20profile&redirect_uri=' +
      redirectUrl + //TODO: Replace redirect_url with backend blank route
      '&code_challenge=' +
      codeChallenge +
      '&code_challenge_method=S256';

    return loginUrl;
  };

  const getAccessToken = (code: string, codeVerifier: string) => {
    return new Promise<void>((resolve, reject) => {
      const tokenRequestConfig: TokenRequestConfig = {
        code,
        client_id: 'public',
        grant_type: 'authorization_code',
        code_verifier: codeVerifier,
        scope: 'openid read profile',
        redirect_uri: 'https://alunopresente.vercel.app/post-login',
      };

      Api.Session.getToken(tokenRequestConfig)
        .then(response => {
          setCurrentSession(response);
          Storage.storeData(CACHE_SESSION_KEY, response);
          resolve();
        })
        .catch(error => {
          setCurrentSession(null);
          Storage.clearItem(CACHE_SESSION_KEY);
          reject(error);
        });
    });
  };

  const getCachedSession = () => {
    Storage.getData(CACHE_SESSION_KEY).then(response => {
      console.log('From cache: ', response);
      setCurrentSession(response);
    });
  };

  return {
    currentSession,
    setCurrentSession,
    generateLoginUrl,
    getAccessToken,
    getCachedSession,
  };
};
