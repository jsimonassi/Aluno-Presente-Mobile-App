import React, {ReactNode} from 'react';
import {PermissionContext} from './PermissionContext';
import {usePermissionData} from './usePermissionData';

interface OwnProps {
  children: ReactNode;
}

export const PermissionProvider = ({children}: OwnProps) => {
  return (
    <PermissionContext.Provider value={usePermissionData()}>
      {children}
    </PermissionContext.Provider>
  );
};
