/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';
import {PreAuthRoutes} from './PreAuthRoutes';
import {useSessionContext} from '../contexts/Session';
import {LoaderRoutes} from './LoaderRoutes';
import {Api} from '../services';
import {PermissionsStack} from './PostAuthRoutes/PermissionsStack';
import {usePermissionContext} from '../contexts/Permission';

export const MainRouter = () => {
  const {currentSession, getCachedSession, logout} = useSessionContext();
  const {permissionsToRequest} = usePermissionContext();

  useEffect(() => {
    getCachedSession()
      .then(() => {
        Api.createAxiosResponseInterceptor(logout);
      })
      .catch(() => {
        logout();
      });
    Api.createAxiosResponseInterceptor(logout);
  }, []);

  if (currentSession != null && !currentSession.accessToken) {
    return <LoaderRoutes />;
  }

  if (currentSession === null) {
    return <PreAuthRoutes />;
  }

  if (permissionsToRequest.length > 0) {
    return <PermissionsStack />;
  }

  return <PostAuthRoutes />;
};
