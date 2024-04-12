/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {
  CameraContainerStyled,
  CheckingTextStyled,
  ContainerStyled,
  TipTextStyled,
} from './styles';
import {
  Camera,
  Code,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

interface QrCodeReaderProps {
  onReadQrCode: (code: string) => void;
}

export const QrCodeReader = ({onReadQrCode}: QrCodeReaderProps) => {
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();

  const onCodeScanned = useCallback((codes: Code[]) => {
    if (codes.length > 0) {
      onReadQrCode(codes[0].value ?? '');
    }
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });

  return (
    <ContainerStyled>
      <CheckingTextStyled>Verificando...</CheckingTextStyled>
      {device != null && (
        <CameraContainerStyled>
          <Camera
            style={{
              width: '100%',
              height: '100%',
            }}
            device={device}
            isActive={isFocused}
            codeScanner={codeScanner}
            torch="off"
            enableZoomGesture={true}
          />
        </CameraContainerStyled>
      )}
      <TipTextStyled>
        Aponte a câmera do seu dispositivo para o QRCode e aguarde a validação
        da chamada
      </TipTextStyled>
    </ContainerStyled>
  );
};
