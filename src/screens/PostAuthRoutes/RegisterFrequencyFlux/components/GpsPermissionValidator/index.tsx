/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ContainerStyled} from './styles';
import {Loader} from '../../../../../components/Loader';
import {usePermissionContext} from '../../../../../contexts/Permission';
import {RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../../../types/app/route';

interface GpsPermissionValidatorProps {
  onPermissionGranted: () => void;
  onUserGaveUp: () => void;
}

export const GpsPermissionValidator = ({
  onPermissionGranted,
  onUserGaveUp,
}: GpsPermissionValidatorProps) => {
  const permissionContext = usePermissionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  useEffect(() => {
    permissionContext
      .checkGpsPermission()
      .then(result => {
        if (result !== RESULTS.GRANTED) {
          navigator.navigate('PermissionsStack', {
            screen: 'LocationPermission',
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
