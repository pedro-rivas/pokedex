import React, {useEffect} from 'react';

// navigation
import NavigationContainer from '../navigator';
// redux
import {Provider} from 'react-redux';
import {store} from '../redux/store';
// components
import {ErrorBoundary} from '../components';
// utils
import {i18n, Logger} from '../utils';
// urql
import {createClient, Provider as UrqlProvider} from 'urql';

const client = createClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
});

export default function App() {
  useEffect(() => {
    Logger.log('mount App');
    i18n.setAppLanguage();
    return () => {
      Logger.log('mount App');
    };
  }, []);

  return (
    <Provider store={store}>
      <UrqlProvider value={client}>
        <ErrorBoundary>
          <NavigationContainer />
        </ErrorBoundary>
      </UrqlProvider>
    </Provider>
  );
}
