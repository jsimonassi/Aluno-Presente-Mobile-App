import React from 'react';
import {RouterContainer} from './routes';
import {ThemeProvider} from 'styled-components/native';
import {Constants} from './constants';
import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import AppProvider from './contexts';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={Constants.LightTheme}>
        <RouterContainer />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
