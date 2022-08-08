import 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StatusBar, useColorScheme, I18nManager} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
import Route from './src/navigations/main';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    if (!I18nManager.isRTL) {
      try {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
        RNRestart.Restart();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Route />
    </SafeAreaView>
  );
};

export default App;
