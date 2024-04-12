import React from 'react';
import {
  ButtonGroup,
  DescriptionText,
  DevelopersTitle,
  InfosContainer,
  LogoImage,
  PageContainer,
  PageScrollContainer,
  TitleContainer,
  VersionText,
} from './styles';
import {PageTitle} from '../../../components/PageTitle';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../types/app/route';
import {assets} from '../../../assets';
import {MainButton} from '../../../components/Buttons';
import DeviceInfo from 'react-native-device-info';
import {DevCard} from './components/DevCard';
import {Linking} from 'react-native';

export const AboutDevs = () => {
  const navigate =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  return (
    <PageScrollContainer>
      <PageContainer>
        <TitleContainer>
          <PageTitle title="Sobre" onBackPress={navigate.goBack} showBackIcon />
        </TitleContainer>
        <InfosContainer>
          <LogoImage source={assets.general.blueLogo} />
          <VersionText>Versão: {DeviceInfo.getVersion()}</VersionText>
          <VersionText>Build: {DeviceInfo.getBuildNumber()}</VersionText>
          <DescriptionText>
            Desenvolvido por João Victor Simonassi e Lucas Lima como parte do
            trabalho final do curso de Ciência da Computação da Universidade
            Federal Fluminense - UFF. Orientador: Lauro Eduardo Kozovits.
          </DescriptionText>
          <DevelopersTitle>Desenvolvedores:</DevelopersTitle>
          <DevCard
            name="João Victor Simonassi"
            description="Desenvolvedor FullStack"
            imageUrl="https://avatars.githubusercontent.com/u/33124078?v=4"
            profileUrl="https://github.com/jsimonassi"
          />
          <DevCard
            name="Lucas da Silva Lima"
            description="Desenvolvedor FullStack"
            imageUrl="https://avatars.githubusercontent.com/u/31750882?v=4"
            profileUrl="https://github.com/Lucasark"
          />
          <ButtonGroup>
            <MainButton
              text="Availe o app"
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/developer?id=Jo%C3%A3o+Victor+Simonassi',
                )
              }
            />
            <MainButton
              text="Reporte um problema"
              onPress={() =>
                Linking.openURL(
                  'https://docs.google.com/forms/d/e/1FAIpQLSfYKhphzzWkTFJHU3I-V3fZGV6ifysvsBQfg-YGLe01zvaluQ/viewform',
                )
              }
              type="secondary"
              border
            />
          </ButtonGroup>
        </InfosContainer>
      </PageContainer>
    </PageScrollContainer>
  );
};
