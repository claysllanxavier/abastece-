import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Routes />
    </ApplicationProvider>
  </Provider>
);

export default App;
