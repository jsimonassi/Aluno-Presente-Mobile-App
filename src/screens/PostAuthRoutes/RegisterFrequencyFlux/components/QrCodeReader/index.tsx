/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState} from 'react';
import {ContainerStyled} from './styles';
// import {
//   Camera,
//   Code,
//   useCameraDevice,
//   useCodeScanner,
// } from 'react-native-vision-camera';
import {StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

interface QrCodeReaderProps {
  onReadQrCode: (code: string) => void;
}

export const QrCodeReader = ({onReadQrCode}: QrCodeReaderProps) => {
  // const device = useCameraDevice('back');
  // const isFocused = useIsFocused();
  // const [torch, setTorch] = useState(false);

  // const onCodeScanned = useCallback((codes: Code[]) => {
  //   console.log(`Scanned ${codes.length} codes:`, codes);
  // }, []);

  // const codeScanner = useCodeScanner({
  //   codeTypes: ['qr', 'ean-13'],
  //   onCodeScanned: onCodeScanned,
  // });

  return (
    <ContainerStyled>
      {/* {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          codeScanner={codeScanner}
          torch={torch ? 'on' : 'off'}
          enableZoomGesture={true}
        />
      )} */}
    </ContainerStyled>
  );
};
