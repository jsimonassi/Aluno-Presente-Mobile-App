/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';
import {PreAuthRoutes} from './PreAuthRoutes';
import {useSessionContext} from '../contexts/Session';
import {LoaderRoutes} from './LoaderRoutes';

export const MainRouter = () => {
  const {currentSession, getCachedSession} = useSessionContext();

  useEffect(() => {
    getCachedSession();
  }, []);

  if (currentSession != null && !currentSession.accessToken) {
    return <LoaderRoutes />;
  }

  if (currentSession === null) {
    return <PreAuthRoutes />;
  }

  return <PostAuthRoutes />;
};
