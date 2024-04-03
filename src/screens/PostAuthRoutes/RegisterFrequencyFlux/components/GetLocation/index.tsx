import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  CheckingTextStyled,
  ContainerStyled,
  GpsLogoContainerStyled,
  GpsLogoStyled,
} from './styles';
import {assets} from '../../../../../assets';

interface CheckLocationProps {
  onGotLocation: (
    latitude: string | undefined,
    longitude: string | undefined,
  ) => void;
}

export const GetLocation = ({onGotLocation}: CheckLocationProps) => {
  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
    });

    Geolocation.getCurrentPosition(
      info => {
        onGotLocation(
          info.coords.latitude.toString(),
          info.coords.longitude.toString(),
        );
      },
      () => {
        //Error
        onGotLocation(undefined, undefined);
      },
    );
  });

  return (
    <ContainerStyled>
      <CheckingTextStyled>Confirmando sua localização...</CheckingTextStyled>
      <GpsLogoContainerStyled>
        <GpsLogoStyled source={assets.registerFrequency.gpsLogo} />
      </GpsLogoContainerStyled>
    </ContainerStyled>
  );
};
