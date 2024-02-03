import {useState} from 'react';
import {RegisterFrequencyStep} from '../../../types/app/registerFrequencyStep';
import {Storage} from '../../../services';

const QR_CODE_CACHE_KEY = 'qr_code_cache_key';

// SHOW_TIPS -> CHECK_CAMERA_PERMISSION -> READ_QR_CODE -> CHECK_GPS_PERMISSION -> GET_POSITION

export const useRegisterFrequencyData = () => {
  //TODO: Validar no backend os dados da sessão de frequencia
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
          setRegisterFrequencyStep(
            RegisterFrequencyStep.CHECK_CAMERA_PERMISSION,
          );
        }
        resolve();
      });
    });
  };

  const saveTipConfig = (showTip: boolean) => {
    Storage.storeData(QR_CODE_CACHE_KEY, showTip);
  };

  return {
    registerFrequencyStep,
    setRegisterFrequencyStep,
    startRegisterFrequency,
    saveTipConfig,
  };
};
