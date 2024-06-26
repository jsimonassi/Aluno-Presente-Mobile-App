import axios from 'axios';
import {Session} from './session';
import {Classes} from './classes';
import {Attendances} from './attendances';
import {Frequency} from './frequency';
import {Teacher} from './teacher';
import {AUTH_SERVER_BASE_URL, RESOURCE_SERVER_BASE_URL} from '@env';
import {Storage} from '../storage';
import {CACHE_SESSION_KEY} from '../../contexts/Session/useSessionData';
import {TokenSession} from '../../types/api/Session';

const authApi = axios.create({
  baseURL: AUTH_SERVER_BASE_URL + '/v1/auth',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  timeoutErrorMessage: 'Tempo de resposta excedido',
  timeout: 30000,
});

const resourceApi = axios.create({
  baseURL: RESOURCE_SERVER_BASE_URL + '/v1/api',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  timeoutErrorMessage: 'Tempo de resposta excedido',
  timeout: 30000,
});

const setAuthToken = (token: string) => {
  resourceApi.defaults.headers.common = {
    Accept: 'application/json, text/plain, */*',
    Authorization: `bearer ${token}`,
  };
};

const createAxiosResponseInterceptor = (logoutFunction: () => void) => {
  console.log('Creating api interceptor');
  resourceApi.interceptors.response.use(
    response => {
      return response;
    },
    async function (err) {
      const originalReq = err.config;
      if (err.response?.status === 401 && err.config && !err.config._retry) {
        console.log('Token expired, updating...');
        originalReq._retry = true;
        const currentSession: TokenSession = await Storage.getData(
          CACHE_SESSION_KEY,
        );

        if (currentSession == null || currentSession.refreshToken == null) {
          logoutFunction();
          return Promise.reject(err);
        }

        //TODO: Replace this with getNewAccessToken request
        logoutFunction();
        // const updatedAccessToken = await getNewToken(
        //   refreshToken,
        //   logoutFunction,
        // );

        // if (updatedAccessToken == null) {
        //   //Não foi possível atualizar o token.
        //   return Promise.reject(err);
        // }
        // originalReq.headers.Authorization = `Bearer ${updatedAccessToken}`; //Se conseguiu atualizar o token, repete a requisição.
        // return axios(originalReq);
      } else {
        return Promise.reject(err);
      }
    },
  );
};

export const Api = {
  resourceApi,
  authApi,
  Session,
  Classes,
  Attendances,
  Frequency,
  Teacher,
  createAxiosResponseInterceptor,
  setAuthToken,
};
