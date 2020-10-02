import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationName } from './NavigationName';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent from './DrawerNav/DrawerContentScreen';
import AuthorizationNavigation from './AuthorizationNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=><DrawerContent {...props}/>}> 
            <Drawer.Screen name={NavigationName.MENU}  component={AuthorizationNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
    
)

export default DrawerNavigation