import {useState} from 'react';
import {UserFrequencyData} from '../../../types/app/frequency';
import {Api} from '../../../services';
import isEqual from 'lodash/isEqual';

export const useUserFrequencyData = () => {
  const [userFrequencyByClass, setUserFrequencyByClass] =
    useState<UserFrequencyData | null>(null);

  const updateUserFrequencyByClass = (courseId: string) => {
    const tempData = userFrequencyByClass || {};

    Api.Frequency.getUserFrequency(courseId).then(data => {
      const newTempData = {...tempData, [courseId]: data};

      if (!isEqual(tempData, newTempData)) {
        // Verifica se há diferenças profundas
        setUserFrequencyByClass(newTempData);
      }
    });
  };
  return {
    userFrequencyByClass,
    updateUserFrequencyByClass,
  };
};
