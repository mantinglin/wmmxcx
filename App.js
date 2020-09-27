import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AppRouter from './src/router/AppRouter';

const App: () => React$Node = () => {
  return (<ApplicationProvider {...eva} theme={eva.light}>
      <AppRouter />
    </ApplicationProvider>
  );
};

export default App;
