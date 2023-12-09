/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';
import {PreAuthRoutes} from './PreAuthRoutes';
import {useSessionContext} from '../contexts/Session';
import {LoaderRoutes} from './LoaderRoutes';
import {Api} from '../services';

export const MainRouter = () => {
  const {currentSession, getCachedSession, logout} = useSessionContext();

  useEffect(() => {
    getCachedSession();
    Api.createAxiosResponseInterceptor(logout);
  }, []);

  if (currentSession != null && !currentSession.accessToken) {
    return <LoaderRoutes />;
  }

  if (currentSession === null) {
    return <PreAuthRoutes />;
  }

  return <PostAuthRoutes />;
};
