import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';
import {ProfileStackParamList} from '../../../types/app/route';
import {PageContainer, TitleContainer} from './styles';
import {PageTitle} from '../../../components/PageTitle';
import {StackNavigationProp} from '@react-navigation/stack';

export const GenericWebview = () => {
  const route = useRoute<RouteProp<ProfileStackParamList, 'GenericWebView'>>();
  const navigator = useNavigation<StackNavigationProp<ProfileStackParamList>>();
  const url = route.params.url;
  const pageTitle = route.params.title;

  return (
    <PageContainer>
      <TitleContainer>
        <PageTitle
          title={pageTitle}
          onBackPress={navigator.goBack}
          showBackIcon
        />
      </TitleContainer>
      {url && (
        <WebView
          source={{uri: url}}
          // style={{width: '100%', height: '100%'}}
        />
      )}
    </PageContainer>
  );
};
