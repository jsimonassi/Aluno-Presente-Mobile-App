/* eslint-disable react-hooks/exhaustive-deps */
import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  CodeContainer,
  ContainerStyled,
  StyledTextInput,
  TipTextStyled,
} from './styles';
import {TextInput} from 'react-native';

const CODE_SIZE = 6;

// Usando forwardRef para passar a ref corretamente
const CodeInput = forwardRef<TextInput, any>((props, ref) => (
  <StyledTextInput ref={ref} {...props} />
));

interface ReadStatusCodeViewProps {
  onReadCode: (code: string) => void;
}

export const ReadStatusCodeView = ({onReadCode}: ReadStatusCodeViewProps) => {
  const [codes, setCodes] = useState<string[]>(Array(CODE_SIZE).fill(''));
  const inputRefs = useRef<TextInput[]>(Array(CODE_SIZE).fill(null));

  const handleInputChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value.length === 1) {
      focusNextInput(index);
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (isAllCodesFilled()) {
      onReadCode(codes.join(''));
    }
  }, [codes]);

  const focusNextInput = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < CODE_SIZE && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleInputBackspace = (index: number) => {
    if (index > 0 && !codes[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isAllCodesFilled = () => {
    return codes.every(code => code.length === 1);
  };

  return (
    <ContainerStyled>
      <TipTextStyled>Digite o código informado pelo professor:</TipTextStyled>
      <CodeContainer>
        {Array.from({length: CODE_SIZE}).map((_, index) => (
          <CodeInput
            key={index}
            ref={el => (inputRefs.current[index] = el as TextInput)}
            value={codes[index]}
            onChangeText={(text: string) => handleInputChange(index, text)}
            onKeyPress={({nativeEvent}: {nativeEvent: any}) => {
              if (nativeEvent.key === 'Backspace') {
                handleInputBackspace(index);
              }
            }}
          />
        ))}
      </CodeContainer>
    </ContainerStyled>
  );
};
