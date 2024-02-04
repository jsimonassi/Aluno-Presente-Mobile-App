/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {useRegisterFrequencyContext} from '../../../contexts/RegisterFrequency';
import {RegisterFrequencyStep} from '../../../types/app/registerFrequencyStep';
import {
  CameraPermissionValidator,
  ErrorInfo,
  GetLocation,
  GpsPermissionValidator,
  QrCodeReader,
  QrCodeTips,
  SuccessInfo,
} from './components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Loader} from '../../../components/Loader';
import {BlueContainerStyled} from './styles';
import { Helpers } from '../../../helpers';

export const RegisterFrequencyFlux = () => {
  const {registerFrequencyStep, setRegisterFrequencyStep, startRegisterFrequency, registerUserFrequency} = useRegisterFrequencyContext();
  const navigator = useNavigation<StackNavigationProp<RegisterFrequencyStackParamList>>();
  const route = useRoute<RouteProp<RegisterFrequencyStackParamList, 'RegisterFrequencyFlux'>>();
  const classInfo = route.params.selectedClass;
  const ALLOWED_DISTANCE = 100;

  const validateQrCode = (qrCodeValue: string) => {
    setRegisterFrequencyStep(RegisterFrequencyStep.CHECKING_QR_CODE);
    console.log('Validando frquencia do curso: ', classInfo.id, ' com código: ', qrCodeValue);
    registerUserFrequency(classInfo.id, qrCodeValue)
      .then(() => {
        setRegisterFrequencyStep(RegisterFrequencyStep.SUCCESS);
      }).catch(() => {
        setRegisterFrequencyStep(RegisterFrequencyStep.GENERIC_ERROR);
      });
  };

  const validateUserLocation = (latitude: string | undefined, longitude: string | undefined) => {
    if (!latitude || !longitude) {
      setRegisterFrequencyStep(RegisterFrequencyStep.GPS_ERROR);
      return;
    }

    if (Helpers.Geolocation.haversineDistance(
      Number.parseFloat(latitude),
      Number.parseFloat(longitude),
      -23.55052,
      -46.633308) < ALLOWED_DISTANCE){
      setRegisterFrequencyStep(RegisterFrequencyStep.GPS_ERROR);
      return;
    }
    setRegisterFrequencyStep(RegisterFrequencyStep.CHECK_CAMERA_PERMISSION);
  };

  const pageContent = () => {
    switch (registerFrequencyStep) {
      case RegisterFrequencyStep.SHOW_TIPS:
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

        case RegisterFrequencyStep.CHECK_GPS_PERMISSION:
        return (
          <GpsPermissionValidator
            onPermissionGranted={() =>
              setRegisterFrequencyStep(RegisterFrequencyStep.GET_POSITION)
            }
            onUserGaveUp={() => navigator.goBack()}
          />
        );

      case RegisterFrequencyStep.GET_POSITION:
        return (
          <GetLocation onGotLocation={(latitude, longitude) => setTimeout(() => validateUserLocation(latitude, longitude), 2000) } />
        );

      case RegisterFrequencyStep.CHECK_CAMERA_PERMISSION:
        return (
          <CameraPermissionValidator
            onPermissionGranted={() =>
              setRegisterFrequencyStep(RegisterFrequencyStep.READ_QR_CODE)
            }
            onUserGaveUp={() => navigator.goBack()}
          />
        );

      case RegisterFrequencyStep.READ_QR_CODE:
        return <QrCodeReader onReadQrCode={validateQrCode} />;

      case RegisterFrequencyStep.CHECKING_QR_CODE:
        return (
          <BlueContainerStyled>
            <Loader />
          </BlueContainerStyled>
        );

      case RegisterFrequencyStep.SUCCESS:
        return (
          <SuccessInfo onGoToHome={() => navigator.goBack()} />
        );

      case RegisterFrequencyStep.GENERIC_ERROR:
      case RegisterFrequencyStep.GPS_ERROR:
        return (
          <ErrorInfo errorType={registerFrequencyStep} onGoToHome={() => navigator.goBack()} onTryAgain={startRegisterFrequency} />
        );

      default:
        return null;
    }
  };

  return <View>{pageContent()}</View>;
};
