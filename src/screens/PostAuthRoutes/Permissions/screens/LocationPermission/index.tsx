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
import {BackHandler} from 'react-native';
import {PermissionData} from '../../../../../types/app/permissions';

export const LocationPermission = () => {
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
      .requestPermission('location')
      .then(permissionsToRequestArray =>
        navigateToNextScreen(permissionsToRequestArray),
      );
  };

  return (
    <ContainerStyled>
      <InfosStyled>
        <ImageStyled source={assets.permission.locationIcon} />
        <TitleStyled>Permissão de localização</TitleStyled>
        <MainTextStyled>
          Em aulas presenciais utilizamos sua localização para confirmar que
          você está na universidade.
        </MainTextStyled>
        <MainTextStyled>
          Por isso, precisamos da sua permissão para acessar a localização do
          dispositivo.
        </MainTextStyled>
      </InfosStyled>
      <MainButton onPress={handleContinue} text="Continuar" />
    </ContainerStyled>
  );
};
