import React from 'react';
import {RouterContainer} from './routes';
import {ThemeProvider} from 'styled-components';
import {Constants} from './constants';

const App = () => {
  return (
    <ThemeProvider theme={Constants.LightTheme}>
      <RouterContainer />
    </ThemeProvider>
  );
};

export default App;
