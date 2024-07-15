import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigators/main';
import i18n from './src/i18n/i18n';
import { I18nextProvider } from 'react-i18next';

function App(): React.JSX.Element {

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
