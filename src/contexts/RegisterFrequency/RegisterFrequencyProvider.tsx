import React, {ReactNode} from 'react';
import {RegisterFrequencyContext} from './RegisterFrequencyContext';
import {useRegisterFrequencyData} from './useRegisterFrequencyData';

interface OwnProps {
  children: ReactNode;
}

export const RegisterFrequencyProvider = ({children}: OwnProps) => {
  return (
    <RegisterFrequencyContext.Provider value={useRegisterFrequencyData()}>
      {children}
    </RegisterFrequencyContext.Provider>
  );
};
