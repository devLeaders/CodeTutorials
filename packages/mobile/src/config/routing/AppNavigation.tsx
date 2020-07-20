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
import FiltersScreen from '../../features/videos/page/FiltersScreen';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import TabNavigation from './TabNavigation';
import { NavOption } from '../../features/common/components/NavOption';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const HomeStackScreen = () => (
    // <NavigationContainer>
    <HomeStack.Navigator>
       
        <HomeStack.Screen name={NavigationName.MOVIELIST} options={NavOption.optionsMovieList} component={MoviesList}/>
        <HomeStack.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie2}/>
        <HomeStack.Screen name={NavigationName.HOME} component={HomeScreen}/> 
        <HomeStack.Screen name={NavigationName.FILTERSSCREEN} component={FiltersScreen} />
        <HomeStack.Screen name={NavigationName.MAINSCREENHEADER} component={MainScreenHeader} />
        <HomeStack.Screen name={NavigationName.SQUAREOFMOVIE} component={SquareToRenderTemp} />
    </HomeStack.Navigator>
    // </NavigationContainer>
 )

export const AuthStackScreen = () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU}  options={NavOption.optionsTabNavigator} component={TabNavigation}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    
)
