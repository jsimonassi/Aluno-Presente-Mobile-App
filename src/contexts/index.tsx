import React from 'react';
import {SessionProvider} from './Session';
import {PermissionProvider} from './Permission';
import {RegisterFrequencyProvider} from './RegisterFrequency';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <RegisterFrequencyProvider>
      <PermissionProvider>
        <SessionProvider>{children}</SessionProvider>
      </PermissionProvider>
    </RegisterFrequencyProvider>
  );
};

export default AppProvider;
