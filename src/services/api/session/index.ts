import axios from 'axios';
import qs from 'qs';
import {TokenRequestConfig, TokenSession} from '../../../types/api/Session';
import {AUTH_SERVER_BASE_URL} from '@env';

export const Session = {
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
            expiresIn: response.data.expires_in,
            idToken: response.data.id_token,
            scope: response.data.scope,
            tokenType: response.data.token_type,
          } as TokenSession);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
