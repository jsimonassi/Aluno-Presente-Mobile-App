import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {Loader} from '../../../components/Loader';
import {LoadingContainer} from './styles';

export const LoginWebView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const testUrl =
    'https://authorization-server-d6ca554d3cbd.herokuapp.com/v1/auth/oauth2/authorize?response_type=code&client_id=public&scope=openid%20read%20profile&redirect_uri=http://localhost:3000/post-login&code_challenge=BAa3b5NJxNT122zFYLgcvzzEe0kbgGw3bBp2-Gc-XJI&code_challenge_method=S256';

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
      <WebView
        onLoad={() => setIsLoading(false)}
        style={{
          display: isLoading ? 'none' : 'flex',
        }}
        source={{
          uri: testUrl,
        }}
      />
    </>
  );
};
