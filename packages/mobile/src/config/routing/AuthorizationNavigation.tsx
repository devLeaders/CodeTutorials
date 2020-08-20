import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';

import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import TabNavigation from './BottomNavigation/TabNavigation';
import HomeStackScreen from './HomeNavigation'
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
const AuthStack = createStackNavigator();

const AuthorizationNavigation = (navigation) => {

    // useEffect(() => {
    //     const openApp = () => messaging().onNotificationOpenedApp(async (remoteMessage:any)=> {
    //         Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage)); 
    //         switch(remoteMessage.data.type ){
    //             case 'newMovie' : 
    //                 console.log(remoteMessage.data.type)
    //             break;
    //             default :
    //                 console.log('brak')
    //         }
    //     });
    //     return openApp()
    // }, []);

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