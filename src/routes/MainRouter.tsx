import React from 'react';
import {PostAuthRoutes} from './PostAuthRoutes';

export const MainRouter = () => {
  // const userStore = useUserContext();

  // if (userStore.data.loadingUserAndLegalData)
  // 	return <Loader visible />;

  // if (!userStore.data.loggedUser)
  // 	return <PreAuthRoutes />;

  return <PostAuthRoutes />;
};
