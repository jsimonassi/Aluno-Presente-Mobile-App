import React from 'react';
import {SessionProvider} from './Session';
import {PermissionProvider} from './Permission';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <PermissionProvider>
      <SessionProvider>{children}</SessionProvider>
    </PermissionProvider>
  );
};

export default AppProvider;
