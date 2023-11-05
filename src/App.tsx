import React from 'react';
import {RouterContainer} from './routes';
import {ThemeProvider} from 'styled-components';
import {Constants} from './constants';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider theme={Constants.LightTheme}>
      <RouterContainer />
    </ThemeProvider>
  );
};

export default App;
