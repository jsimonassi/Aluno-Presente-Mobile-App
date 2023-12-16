import {useContext} from 'react';
import {PermissionContext} from './PermissionContext';

export const usePermissionContext = () => {
  const contextData = useContext(PermissionContext);
  if (!contextData) {
    throw new Error('Trying to access context outside provider.');
  }

  return contextData;
};
