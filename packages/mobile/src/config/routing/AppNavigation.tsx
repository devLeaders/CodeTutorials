import React, {Component} from 'react';
//navigation import
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationName } from './NavigationName';

// Here we can import new screens
import HomeScreen from '../../features/videos/page/HomeScreen';
import MoviesList from '../../features/videos/page/MoviesList';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import TabNavigation from './TabNavigation';


const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator>
          <HomeStack.Screen name={NavigationName.HOME} component={HomeScreen}/> 
          <HomeStack.Screen name={NavigationName.MOVIELIST} component={MoviesList}/>
          <HomeStack.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie2}/>
    </HomeStack.Navigator>
)

export const AuthStackScreen = () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.BOTTOMMENU} component={TabNavigation}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    
)
