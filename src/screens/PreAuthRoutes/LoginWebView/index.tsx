import React from 'react';
import WebView from 'react-native-webview';

export const LoginWebView = () => {
  const testUrl =
    'https://authorization-server-d6ca554d3cbd.herokuapp.com/v1/auth/oauth2/authorize?response_type=code&client_id=public&scope=openid%20read%20profile&redirect_uri=http://localhost:3000/post-login&code_challenge=BAa3b5NJxNT122zFYLgcvzzEe0kbgGw3bBp2-Gc-XJI&code_challenge_method=S256';

  return (
    <WebView
      source={{
        uri: testUrl,
      }}
    />
  );
};
