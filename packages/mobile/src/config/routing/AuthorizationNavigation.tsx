import React, { useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';

import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import TabNavigation from './BottomNavigation/TabNavigation';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import { Alert, AsyncStorage } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { NotyficationContext } from '../../../NotificationsStore'

const AuthStack = createStackNavigator();

const AuthorizationNavigation = (navigation) => {
    
    const {state, dispatch} = useContext(NotyficationContext)
 
    useEffect(() => {
      messaging().getToken().then(fcmToken => { 
        
      if (fcmToken) {
        console.log('token= ', fcmToken)
        return fcmToken
      } else {
        console.log('Nie dziala')
      } 
      });
      
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        const action = {
          type : 'ADD_MSG',
          payload : {
            notificationType : remoteMessage.data?.type,
            data : remoteMessage.data?.data
          }
        }
        dispatch(action)
        console.log(remoteMessage)
        }
      );

      messaging().onMessageSent((notificationOpen:any) => {

          if(1){
            console.log('navigation = ', navigation)
            console.log("jest push",notificationOpen);
            navigation.navigate(NavigationName.SINGLEMOVIE)
          } else {
            console.log("1");
          }
        }
      );

    }, []);

  

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU} options={NavOption.optionsDrawer} component={TabNavigation}/>
            <AuthStack.Screen name={NavigationName.SINGLEMOVIE} options={NavOption.optionsSingleMovie(navigation)} component={SingleMovie2} />
        </AuthStack.Navigator>
    )
}

export default AuthorizationNavigation