export interface TokenRequestConfig {
  grant_type: 'authorization_code';
  code: string;
  scope: 'openid read profile';
  client_id: 'public';
  redirect_uri: string;
  code_verifier: string;
}

export interface TokenSession {
  accessToken: string;
  accessTokenExpirationDate: string;
  idToken: string;
  scopes: string[];
  tokenType: string;
  refreshToken: string | null;
  currentUser: User;
}

export interface User {
  name: string;
  alias: string;
  registration: string;
  email: string;
}
