import React from 'react';
import {SessionProvider} from './Session';
import {PermissionProvider} from './Permission';
import {RegisterFrequencyProvider} from './RegisterFrequency';
import {UserFrequencyProvider} from './UserFrequency';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <UserFrequencyProvider>
      <RegisterFrequencyProvider>
        <PermissionProvider>
          <SessionProvider>{children}</SessionProvider>
        </PermissionProvider>
      </RegisterFrequencyProvider>
    </UserFrequencyProvider>
  );
};

export default AppProvider;
