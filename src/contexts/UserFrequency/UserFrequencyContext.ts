import {createContext} from 'react';
import {useUserFrequencyData} from './useUserFrequencyData';

export const UserFrequencyContext = createContext<ReturnType<
  typeof useUserFrequencyData
> | null>(null);
