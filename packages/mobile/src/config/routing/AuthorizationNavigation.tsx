import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';

import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import TabNavigation from './BottomNavigation/TabNavigation';
import SingleMovie from '../../features/videos/page/SingleMovie';
import { VideoPlayerScreen } from '../../features/videoPlayer/page/VideoPlayerScreen';

import HomeScreen from '../../features/videos/page/HomeScreen';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import MoviesList from '../../features/videos/page/MoviesList';
import FiltersScreen from '../../features/videos/page/FiltersScreen';
import ShortcutToFilters from '../../features/videos/components/FiltersScreen/ShortcutToFilters';
import FilterWithList from '../../features/videos/page/FilterWithList';

const AuthStack = createStackNavigator();

const AuthorizationNavigation = (navigation) => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsSingIn} component={SignInScreen}/>
        <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsSingUp} component={SignUpScreen}/>
        <AuthStack.Screen name={NavigationName.MENU} options={NavOption.optionsDrawer} component={TabNavigation}/>
        <AuthStack.Screen name={NavigationName.SINGLEMOVIE} options={NavOption.optionsSingleMovie(navigation)} component={SingleMovie} />
        <AuthStack.Screen name={NavigationName.VIDEOPLAYER} options={NavOption.optionsSingIn} component={VideoPlayerScreen}/>
    </AuthStack.Navigator>
)

export default AuthorizationNavigation;

