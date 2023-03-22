import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, useColorScheme, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Routes from './screens/routes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes />
    </>
  );
}

export default App;
