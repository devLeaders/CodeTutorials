import React, {Component, useEffect} from 'react';
import { AuthStackScreen } from './src/config/routing/AppNavigation';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return(
    <AuthStackScreen />
  )
}
export default App;