import pkceChallenge from 'react-native-pkce-challenge';

const generatePkceChallenge = () => {
  return pkceChallenge();
};

export const CodeGenerator = {
  generatePkceChallenge,
};
