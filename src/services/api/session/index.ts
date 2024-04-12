import axios from 'axios';
import qs from 'qs';
import {
  TokenRequestConfig,
  TokenSession,
  User,
} from '../../../types/api/Session';
import {AUTH_SERVER_BASE_URL} from '@env';
import {Api} from '..';

export const Session = {
  /**
   * @deprecated
   * All login implementation was replaced by react-native-app-auth
   * @param tokenRequestConfig information to get token
   * @returns Promise<TokenSession> with token information
   */
  getToken: (tokenRequestConfig: TokenRequestConfig) => {
    return new Promise<TokenSession>((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: qs.stringify(tokenRequestConfig),
        url: AUTH_SERVER_BASE_URL + '/v1/auth/oauth2/token',
      };
      axios(options)
        .then(response => {
          console.log(response.data);
          resolve({
            accessToken: response.data.access_token,
            tokenType: response.data.token_type,
            idToken: response.data.id_token,
            refreshToken: response.data.refresh_token,
            scopes: response.data.scope,
          } as TokenSession);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  /**
   * Get current user by auth token
   * @returns Promise<void>
   */
  getCurrentUser: () => {
    return new Promise<User>((resolve, reject) => {
      Api.resourceApi
        .get('/users')
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
