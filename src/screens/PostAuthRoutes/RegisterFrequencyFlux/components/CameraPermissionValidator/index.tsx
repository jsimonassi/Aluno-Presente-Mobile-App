/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ContainerStyled} from './styles';
import {Loader} from '../../../../../components/Loader';
import {usePermissionContext} from '../../../../../contexts/Permission';
import {RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../../../types/app/route';

interface CameraPermissionValidatorProps {
  onPermissionGranted: () => void;
  onUserGaveUp: () => void;
}

export const CameraPermissionValidator = ({
  onPermissionGranted,
  onUserGaveUp,
}: CameraPermissionValidatorProps) => {
  const permissionContext = usePermissionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  useEffect(() => {
    permissionContext
      .checkCameraPermission()
      .then(result => {
        if (result !== RESULTS.GRANTED) {
          navigator.navigate('PermissionsStack', {
            screen: 'CameraPermission',
            params: {standalone: true},
          });
          onUserGaveUp();
        } else {
          onPermissionGranted();
        }
      })
      .catch(err => {
        console.log(err);
        onUserGaveUp();
      });
  }, []);

  return (
    <ContainerStyled>
      <Loader />
    </ContainerStyled>
  );
};
