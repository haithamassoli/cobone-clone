import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
import Route from './src/navigations/main';
import {store} from '@Redux/store';
import {Provider} from 'react-redux';

const App = () => {
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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Route />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
