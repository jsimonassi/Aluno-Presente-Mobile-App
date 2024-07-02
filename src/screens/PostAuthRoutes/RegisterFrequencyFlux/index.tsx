/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { useRegisterFrequencyContext } from '../../../contexts/RegisterFrequency';
import { RegisterFrequencyStep } from '../../../types/app/registerFrequencyStep';
import {
  CameraPermissionValidator,
  ErrorInfo,
  GetLocation,
  GpsPermissionValidator,
  QrCodeReader,
  QrCodeTips,
  SuccessInfo,
} from './components';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabParamList, RegisterFrequencyStackParamList } from '../../../types/app/route';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Loader } from '../../../components/Loader';
import { BlueContainerStyled } from './styles';
import { Helpers } from '../../../helpers';
import { ReadStatusCodeView } from './components/ReadStatusCodeView';
import { SessionCodeTips } from './components/SessionCodeTips';

export const RegisterFrequencyFlux = () => {
  const { registerFrequencyStep, setRegisterFrequencyStep, startRegisterFrequency, registerUserFrequency } = useRegisterFrequencyContext();
  const navigator = useNavigation<StackNavigationProp<MainTabParamList>>();
  const route = useRoute<RouteProp<RegisterFrequencyStackParamList, 'RegisterFrequencyFlux'>>();
  const classInfo = route.params.selectedClass;
  const attendanceInfos = route.params.attendanceInfos;
  const ALLOWED_DISTANCE_IN_KM = 1;

  const validateCode = (qrCodeValue: string) => {
    setRegisterFrequencyStep(RegisterFrequencyStep.CHECKING_CODE);
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

    if (attendanceInfos.location &&
      Helpers.Geolocation.haversineDistance(
        Number.parseFloat(latitude),
        Number.parseFloat(longitude),
        attendanceInfos.location?.latitude,
        attendanceInfos.location?.longitude) > ALLOWED_DISTANCE_IN_KM) {
      setRegisterFrequencyStep(RegisterFrequencyStep.GPS_ERROR);
      return;
    }

    if (attendanceInfos.origin === 'STATIC'){
      setRegisterFrequencyStep(RegisterFrequencyStep.READ_SESSION_CODE);
      return;
    }

    setRegisterFrequencyStep(RegisterFrequencyStep.CHECK_CAMERA_PERMISSION);
  };

  const pageContent = () => {
    switch (registerFrequencyStep) {
      case RegisterFrequencyStep.SHOW_QR_CODE_TIPS:
        return (
          <QrCodeTips
            onBackPress={() => navigator.navigate('Home')}
            onStartPress={() => {
              if (attendanceInfos.location && attendanceInfos.location.latitude && attendanceInfos.location.longitude) {
                setRegisterFrequencyStep(RegisterFrequencyStep.CHECK_GPS_PERMISSION);
              } else {
                setRegisterFrequencyStep(
                  RegisterFrequencyStep.CHECK_CAMERA_PERMISSION,
                );
              }
            }
            }
          />
        );

      case RegisterFrequencyStep.SHOW_SESSION_CODE_TIPS:
        return (
          <SessionCodeTips
            onBackPress={() => navigator.navigate('Home')}
            onStartPress={() => {
              if (attendanceInfos.location && attendanceInfos.location.latitude && attendanceInfos.location.longitude) {
                setRegisterFrequencyStep(RegisterFrequencyStep.CHECK_GPS_PERMISSION);
              } else {
                setRegisterFrequencyStep(
                  RegisterFrequencyStep.READ_SESSION_CODE,
                );
              }
            }
            }
          />
        );

      case RegisterFrequencyStep.CHECK_GPS_PERMISSION:
        return (
          <GpsPermissionValidator
            onPermissionGranted={() =>
              setRegisterFrequencyStep(RegisterFrequencyStep.GET_POSITION)
            }
            onUserGaveUp={() => navigator.navigate('Home')}
          />
        );

      case RegisterFrequencyStep.GET_POSITION:
        return (
          <GetLocation onGotLocation={(latitude, longitude) => setTimeout(() => validateUserLocation(latitude, longitude), 2000)} />
        );

      case RegisterFrequencyStep.CHECK_CAMERA_PERMISSION:
        return (
          <CameraPermissionValidator
            onPermissionGranted={() =>
              setRegisterFrequencyStep(RegisterFrequencyStep.READ_QR_CODE)
            }
            onUserGaveUp={() => navigator.navigate('Home')}
          />
        );

      case RegisterFrequencyStep.READ_QR_CODE:
        return <QrCodeReader onReadQrCode={validateCode} />;

      case RegisterFrequencyStep.CHECKING_CODE:
        return (
          <BlueContainerStyled>
            <Loader />
          </BlueContainerStyled>
        );

      case RegisterFrequencyStep.SUCCESS:
        return (
          <SuccessInfo onGoToHome={() => navigator.navigate('Home')} />
        );

      case RegisterFrequencyStep.GENERIC_ERROR:
      case RegisterFrequencyStep.GPS_ERROR:
        return (
          <ErrorInfo errorType={registerFrequencyStep} onGoToHome={() => navigator.navigate('Home')} onTryAgain={() => startRegisterFrequency(attendanceInfos)} />
        );

      case RegisterFrequencyStep.READ_SESSION_CODE:
        return (
          <ReadStatusCodeView onReadCode={validateCode}  />
        );

      default:
        return null;
    }
  };

  return <View>{pageContent()}</View>;
};
