import React from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';
import {PreAuthRoutes} from './PreAuthRoutes';

export const MainRouter = () => {
  // const userStore = useUserContext();

  // if (userStore.data.loadingUserAndLegalData)
  // 	return <Loader visible />;

  if (true) {
    return <PreAuthRoutes />;
  }

  return <PostAuthRoutes />;
};
