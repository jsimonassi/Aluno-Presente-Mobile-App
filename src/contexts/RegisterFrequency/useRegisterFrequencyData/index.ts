import {useState} from 'react';
import {RegisterFrequencyStep} from '../../../types/app/registerFrequencyStep';
import {Api, Storage} from '../../../services';

const QR_CODE_CACHE_KEY = 'qr_code_cache_key';

export const useRegisterFrequencyData = () => {
  const [registerFrequencyStep, setRegisterFrequencyStep] = useState(
    RegisterFrequencyStep.SHOW_TIPS,
  );

  const startRegisterFrequency = () => {
    return new Promise<void>(resolve => {
      Storage.getData(QR_CODE_CACHE_KEY).then((data: string) => {
        const notShowTip = JSON.parse(data) as boolean;
        if (notShowTip == null || !notShowTip === true) {
          setRegisterFrequencyStep(RegisterFrequencyStep.SHOW_TIPS);
        } else {
          setRegisterFrequencyStep(RegisterFrequencyStep.CHECK_GPS_PERMISSION);
        }
        resolve();
      });
    });
  };

  const registerUserFrequency = (courseId: string, code: string) => {
    return Api.Attendances.registerUserAttendance(courseId, code);
  };

  const saveTipConfig = (showTip: boolean) => {
    Storage.storeData(QR_CODE_CACHE_KEY, showTip);
  };

  const checkAttendanceInProgress = (courseId: string) => {
    return Api.Attendances.checkAttendanceInProgress(courseId);
  };

  return {
    registerFrequencyStep,
    setRegisterFrequencyStep,
    startRegisterFrequency,
    saveTipConfig,
    registerUserFrequency,
    checkAttendanceInProgress,
  };
};
