import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationName } from './NavigationName';

import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './BottomNavigation/TabNavigation';
import { DrawerContent } from './DrawerNav/DrawerContentScreen';



const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AuthStackScreen = () => (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> 
            <Drawer.Screen name={NavigationName.MENU}  component={()=>{
                return(
                    <AuthStack.Navigator>
                        <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
                        <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
                        <AuthStack.Screen name={NavigationName.MENU} options={NavOption.optionsDrawer} component={TabNavigation}/>
                    </AuthStack.Navigator>
                )
            }} />
      </Drawer.Navigator>
    </NavigationContainer>
    
)
