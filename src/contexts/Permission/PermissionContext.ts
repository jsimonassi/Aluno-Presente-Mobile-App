import {createContext} from 'react';
import {usePermissionData} from './usePermissionData';

export const PermissionContext = createContext<ReturnType<
  typeof usePermissionData
> | null>(null);
