import React from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';
import {PreAuthRoutes} from './PreAuthRoutes';
import {useSessionContext} from '../contexts/Session';

export const MainRouter = () => {
  const {currentSession} = useSessionContext();

  if (!currentSession) {
    return <PreAuthRoutes />;
  }

  return <PostAuthRoutes />;
};
