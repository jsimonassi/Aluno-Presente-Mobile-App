import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {ProfileStackParamList} from '../../../types/app/route';
import {LoaderContainer, PageContainer, TitleContainer} from './styles';
import {PageTitle} from '../../../components/PageTitle';
import {StackNavigationProp} from '@react-navigation/stack';
import {Loader} from '../../../components/Loader';

export const GenericWebview = () => {
  const route = useRoute<RouteProp<ProfileStackParamList, 'GenericWebView'>>();
  const navigator = useNavigation<StackNavigationProp<ProfileStackParamList>>();
  const url = route.params.url;
  const pageTitle = route.params.title;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PageContainer>
      <TitleContainer>
        <PageTitle
          title={pageTitle}
          onBackPress={navigator.goBack}
          showBackIcon
        />
      </TitleContainer>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {url && (
        <WebView onLoad={() => setIsLoading(false)} source={{uri: url}} />
      )}
    </PageContainer>
  );
};
