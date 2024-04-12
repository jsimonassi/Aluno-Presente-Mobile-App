import {useContext} from 'react';
import {RegisterFrequencyContext} from './RegisterFrequencyContext';

export const useRegisterFrequencyContext = () => {
  const contextData = useContext(RegisterFrequencyContext);
  if (!contextData) {
    throw new Error('Trying to access context outside provider.');
  }

  return contextData;
};
