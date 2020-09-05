import React, { useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';

import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import TabNavigation from './BottomNavigation/TabNavigation';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import messaging from '@react-native-firebase/messaging';
import { NotyficationContext } from '../../features/notifications/NotificationsStore'
import { ContextType } from '../../features/notifications/NotificationEnum';

const AuthStack = createStackNavigator();

const AuthorizationNavigation = (navigation) => {
    
    const {state, dispatch} = useContext(NotyficationContext)
 
    useEffect(() => {
      messaging().getToken().then(fcmToken => { 
        if (fcmToken) {
          return fcmToken
        } 
      });
      
      messaging().setBackgroundMessageHandler(async (remoteMessage:any) => {
        const action = {
          type : ContextType.ADD_MSG,
          payload : {
            notificationType : remoteMessage.data?.type,
            data : JSON.parse(remoteMessage.data?.data)
          }
        }
          dispatch(action)
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