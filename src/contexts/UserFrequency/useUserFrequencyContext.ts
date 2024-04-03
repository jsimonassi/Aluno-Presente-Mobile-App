import {useContext} from 'react';
import {UserFrequencyContext} from './UserFrequencyContext';

export const useUserFrequencyContext = () => {
  const contextData = useContext(UserFrequencyContext);
  if (!contextData) {
    throw new Error('Trying to access context outside provider.');
  }

  return contextData;
};
