import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigators/main';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}

export default App;
