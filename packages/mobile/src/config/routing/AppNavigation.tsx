import React from 'react';
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

import { NavOption } from '../../features/common/components/NavOption';
import SingleMovieDescription from '../../features/videos/components/SingleScreen/SingleMovieDescription';
import FiltersScreen from '../../features/videos/page/FiltersScreen';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name={NavigationName.MOVIELIST} options={NavOption.optionsMovieList} component={MoviesList}/>
        <HomeStack.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie2}/>
        {/* <HomeStack.Screen name={NavigationName.HOME} component={HomeScreen}/>  */}
        <HomeStack.Screen name={NavigationName.SINGLEMOVIEDESCRIPTION} component={SingleMovieDescription} />
        <HomeStack.Screen name={NavigationName.FILTERSSCREEN} component={FiltersScreen} />
    </HomeStack.Navigator>
 )

export const AuthStackScreen = () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp}  component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU}  options={NavOption.optionsTabNavigator} component={TabNavigation}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    
)
