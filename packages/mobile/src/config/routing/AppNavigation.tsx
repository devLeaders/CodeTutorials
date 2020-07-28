import React from 'react';
//navigation import
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationName } from './NavigationName';

// Here we can import new screens
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import TabNavigation from './BottomNavigation/TabNavigation';
import { NavOption } from '../../features/common/components/NavOption';
import DrawerNavigation from './DrawerNavigation';


const AuthStack = createStackNavigator();


export const AuthStackScreen = () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU}  options={NavOption.optionsMenu} component={DrawerNavigation}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    
)
