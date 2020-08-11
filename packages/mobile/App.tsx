import React, {Component, useEffect} from 'react';
import { AuthStackScreen } from './src/config/routing/AppNavigation';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const App = () => {
  useEffect(() => {
    const openApp = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return openApp;
  }, []);
  
  // useEffect(() => {
  //   const closeApp = messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return closeApp;
  // }, []);

  return(
    <AuthStackScreen />
  )
}
export default App;