import {useState} from 'react';
import {AUTH_SERVER_BASE_URL, AUTH_CLIENT_ID} from '@env';
import {Api, Storage} from '../../../services';
import {TokenRequestConfig, TokenSession} from '../../../types/api/Session';

export const CACHE_SESSION_KEY = 'session_cache_key';

export const useSessionData = () => {
  const [currentSession, setSession] = useState<TokenSession | null>(
    {} as TokenSession,
  );

  /**
   * @deprecated
   * All login implementation was replaced by react-native-app-auth
   * @param redirectUrl string url callback
   * @param codeChallenge pkce code challenge
   * @returns complete login url
   */
  const generateLoginUrl = (redirectUrl: string, codeChallenge: string) => {
    const loginUrl =
      AUTH_SERVER_BASE_URL +
      '/v1/auth/oauth2/authorize?response_type=code&client_id=' +
      AUTH_CLIENT_ID +
      '&scope=openid%20read%20profile&redirect_uri=' +
      redirectUrl +
      '&code_challenge=' +
      codeChallenge +
      '&code_challenge_method=S256';

    return loginUrl;
  };

  /**
   * @deprecated
   * All login implementation was replaced by react-native-app-auth
   * @param code backend auth code
   * @param codeVerifier pkce code challenge
   * @returns Promise<void>
   */
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
          setSession(response);
          Storage.storeData(CACHE_SESSION_KEY, response);
          resolve();
        })
        .catch(error => {
          setSession(null);
          Storage.clearItem(CACHE_SESSION_KEY);
          reject(error);
        });
    });
  };

  const getCachedSession = () => {
    return new Promise<TokenSession | null>((resolve, reject) => {
      Storage.getData(CACHE_SESSION_KEY)
        .then(response => {
          console.log('From cache: ', response);
          Api.setAuthToken(response?.accessToken ?? null);
          setTimeout(() => {
            setCurrentSession(response);
            resolve(response);
          }, 300);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const setCurrentSession = (session: TokenSession) => {
    setSession(session);
    Storage.storeData(CACHE_SESSION_KEY, session);
  };

  const logout = async () => {
    try {
      Api.setAuthToken('');
      setSession(null);
      await Storage.clearItem(CACHE_SESSION_KEY);
      return Promise.resolve();
    } catch (error) {
      console.log('Error on logout: ', error);
      return Promise.reject();
    }
  };

  return {
    currentSession,
    setCurrentSession,
    generateLoginUrl,
    getAccessToken,
    getCachedSession,
    logout,
  };
};
