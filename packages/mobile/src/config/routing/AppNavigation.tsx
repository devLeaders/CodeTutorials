import React, { useRef, useEffect, useState } from 'react';
//navigation import
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NavigationName } from './NavigationName';

// Here we can import new screens
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import TabNavigation from './TabNavigation';
import { NavOption } from '../../features/common/components/NavOption';

import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const AuthStack = createStackNavigator();


export const AuthStackScreen = () => {
    // const navigation = useNavigation();

    useEffect(() => {
        const openApp = () => messaging().onNotificationOpenedApp(async (remoteMessage:any)=> {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage)); 
            switch(remoteMessage.data.type ){
                case 'newMovie' : 
                    console.log(remoteMessage.data.type)
                break;
                default :
                    console.log('brak')
            }
        });
        return openApp()
    }, []);
    
    return(
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU}  options={NavOption.optionsTabNavigator} component={TabNavigation}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    )
}
