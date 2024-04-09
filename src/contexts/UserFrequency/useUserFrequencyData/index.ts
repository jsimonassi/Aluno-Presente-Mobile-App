import {useState} from 'react';
import {UserFrequencyData} from '../../../types/app/frequency';
import {Api} from '../../../services';

export const useUserFrequencyData = () => {
  const [userFrequencyByClass, setUserFrequencyByClass] =
    useState<UserFrequencyData | null>(null);

  const updateUserFrequencyByClass = (courseId: string) => {
    const tempData = userFrequencyByClass || {};
    Api.Frequency.getUserFrequency(courseId).then(data => {
      tempData[courseId] = data;
      setUserFrequencyByClass(null);
      //Força a atualização para gerar render
      setTimeout(() => {
        setUserFrequencyByClass(tempData);
      }, 1000);
    });
  };
  return {
    userFrequencyByClass,
    updateUserFrequencyByClass,
  };
};
