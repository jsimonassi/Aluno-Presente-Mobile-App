import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useRegisterFrequencyContext} from '../../../contexts/RegisterFrequency';
import {RegisterFrequencyStep} from '../../../types/app/registerFrequencyStep';
import {
  CameraPermissionValidator,
  QrCodeReader,
  QrCodeTips,
} from './components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';
import {useNavigation} from '@react-navigation/native';

export const RegisterFrequencyFlux = () => {
  const {registerFrequencyStep, setRegisterFrequencyStep} =
    useRegisterFrequencyContext();
  const navigator =
    useNavigation<StackNavigationProp<RegisterFrequencyStackParamList>>();

  useEffect(() => {
    switch (registerFrequencyStep) {
      case RegisterFrequencyStep.SHOW_TIPS:
        console.log('Showing tips');
        break;
      case RegisterFrequencyStep.CHECK_CAMERA_PERMISSION:
        console.log('Checking camera permission');
        break;
      case RegisterFrequencyStep.READ_QR_CODE:
        console.log('Reading QR Code');
        break;
      case RegisterFrequencyStep.CHECK_GPS_PERMISSION:
        console.log('Checking GPS permission');
        break;
      case RegisterFrequencyStep.GET_POSITION:
        console.log('Getting position');
        break;
      default:
        break;
    }
  }, [registerFrequencyStep]);

  const pageContent = () => {
    if (registerFrequencyStep === RegisterFrequencyStep.SHOW_TIPS) {
      return (
        <QrCodeTips
          onBackPress={() => navigator.goBack()}
          onStartPress={() =>
            setRegisterFrequencyStep(
              RegisterFrequencyStep.CHECK_CAMERA_PERMISSION,
            )
          }
        />
      );
    } else if (
      registerFrequencyStep === RegisterFrequencyStep.CHECK_CAMERA_PERMISSION
    ) {
      return (
        <CameraPermissionValidator
          onPermissionGranted={() =>
            setRegisterFrequencyStep(RegisterFrequencyStep.READ_QR_CODE)
          }
          onUserGaveUp={() => navigator.goBack()}
        />
      );
    } else if (registerFrequencyStep === RegisterFrequencyStep.READ_QR_CODE) {
      return <QrCodeReader onReadQrCode={() => null} />;
    }
    return <View />;
  };

  return <View>{pageContent()}</View>;
};
