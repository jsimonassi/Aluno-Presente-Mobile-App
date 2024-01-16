import {createContext} from 'react';
import {useRegisterFrequencyData} from './useRegisterFrequencyData';

export const RegisterFrequencyContext = createContext<ReturnType<
  typeof useRegisterFrequencyData
> | null>(null);
