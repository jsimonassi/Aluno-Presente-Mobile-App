/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  ContainerStyled,
  ImageStyled,
  InfosStyled,
  MainTextStyled,
  TitleStyled,
} from './styles';
import {assets} from '../../../../../assets';
import {MainButton} from '../../../../../components/Buttons';
import {usePermissionContext} from '../../../../../contexts/Permission';
import {useNavigation} from '@react-navigation/native';
import {DeviceScreenNavigationProp} from '../../types';
import {PermissionData} from '../../../../../types/app/permissions';
import {BackHandler} from 'react-native';

export const CameraPermission = () => {
  const permissionContext = usePermissionContext();
  const navigation = useNavigation<DeviceScreenNavigationProp>();

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const navigateToNextScreen = (
    permissionsToRequestArray: PermissionData[],
  ) => {
    if (permissionsToRequestArray.length > 0) {
      const nextScreen = permissionContext.getNextNavigationScreen(
        permissionsToRequestArray,
      );
      if (nextScreen) {
        navigation.navigate(nextScreen);
        return;
      }
      navigation.navigate('Home');
    }
  };

  const handleContinue = () => {
    permissionContext
      .requestPermission('camera')
      .then(permissionsToRequestArray =>
        navigateToNextScreen(permissionsToRequestArray),
      );
  };

  return (
    <ContainerStyled>
      <InfosStyled>
        <ImageStyled source={assets.permission.cameraIcon} />
        <TitleStyled>Permissão de câmera</TitleStyled>
        <MainTextStyled>
          Utilizamos a câmera do dispositivo para ler um QRCode e validar sua
          presença nas disciplinas.
        </MainTextStyled>
        <MainTextStyled>
          Por isso, precisamos da sua permissão para acessá-la.
        </MainTextStyled>
      </InfosStyled>
      <MainButton onPress={handleContinue} text="Continuar" />
    </ContainerStyled>
  );
};
