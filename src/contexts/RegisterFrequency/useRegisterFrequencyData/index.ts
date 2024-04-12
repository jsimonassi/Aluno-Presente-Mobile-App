import {useState} from 'react';
import {RegisterFrequencyStep} from '../../../types/app/registerFrequencyStep';
import {Api, Storage} from '../../../services';
import {AttendanceInProgressModel} from '../../../types/api/Attendance';

const QR_CODE_CACHE_KEY = 'qr_code_cache_key';
const SESSION_CODE_CACHE_KEY = 'session_code_cache_key';

export const useRegisterFrequencyData = () => {
  const [registerFrequencyStep, setRegisterFrequencyStep] = useState(
    RegisterFrequencyStep.SHOW_QR_CODE_TIPS,
  );

  const startRegisterFrequency = (
    attendanceInfos: AttendanceInProgressModel | null,
  ) => {
    return new Promise<void>(resolve => {
      if (attendanceInfos === null) {
        setRegisterFrequencyStep(RegisterFrequencyStep.GENERIC_ERROR);
        resolve();
      }
      console.log('attendanceInfos CONTEXTO', attendanceInfos);
      if (attendanceInfos && attendanceInfos.origin === 'STATIC') {
        Storage.getData(SESSION_CODE_CACHE_KEY)
          .then(data => {
            const notShowTip = JSON.parse(data) as boolean;
            if (notShowTip == null || !notShowTip === true) {
              setRegisterFrequencyStep(
                RegisterFrequencyStep.SHOW_SESSION_CODE_TIPS,
              );
            } else {
              setRegisterFrequencyStep(RegisterFrequencyStep.READ_SESSION_CODE);
            }
          })
          .finally(() => {
            resolve();
          });
      } else {
        Storage.getData(QR_CODE_CACHE_KEY)
          .then(data => {
            const notShowTip = JSON.parse(data) as boolean;
            if (notShowTip == null || !notShowTip === true) {
              setRegisterFrequencyStep(RegisterFrequencyStep.SHOW_QR_CODE_TIPS);
            } else {
              setRegisterFrequencyStep(RegisterFrequencyStep.READ_QR_CODE);
            }
          })
          .finally(() => {
            resolve();
          });
      }
    });
  };

  const registerUserFrequency = (courseId: string, code: string) => {
    return Api.Attendances.registerUserAttendance(courseId, code);
  };

  const saveTipConfig = (showTip: boolean, type: 'SESSION' | 'QR') => {
    if (type === 'SESSION') {
      Storage.storeData(SESSION_CODE_CACHE_KEY, showTip);
    } else {
      Storage.storeData(QR_CODE_CACHE_KEY, showTip);
    }
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
