import {useState} from 'react';
import {UserFrequencyData} from '../../../types/app/frequency';
import {Api} from '../../../services';

export const useUserFrequencyData = () => {
  const [userFrequencyByClass, setUserFrequencyByClass] =
    useState<UserFrequencyData>({});

  const updateUserFrequencyByClass = (courseId: string) => {
    Api.Frequency.getUserFrequency(courseId).then(data => {
      const currentData = userFrequencyByClass || {};
      currentData[courseId] = data;
      setUserFrequencyByClass(currentData);
    });
  };
  return {
    userFrequencyByClass,
    updateUserFrequencyByClass,
  };
};
