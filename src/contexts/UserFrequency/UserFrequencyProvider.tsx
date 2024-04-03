import React, {ReactNode} from 'react';
import {UserFrequencyContext} from './UserFrequencyContext';
import {useUserFrequencyData} from './useUserFrequencyData';

interface OwnProps {
  children: ReactNode;
}

export const UserFrequencyProvider = ({children}: OwnProps) => {
  return (
    <UserFrequencyContext.Provider value={useUserFrequencyData()}>
      {children}
    </UserFrequencyContext.Provider>
  );
};
