/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {Component} from 'react';
//navigation import
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationName } from './NavigationName';

// Here we can import new screens
import HomeScreen from '../../features/videos/page/HomeScreen';
import { MoviesList } from '../../features/videos/page/MoviesList';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import SignIn from '../../features/auth/page/SignInScrren';
import LogIn from '../../features/auth/components/SignIn/LogIn';
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import SingleMovieDescription from '../..//features/videos/components/SingleScreen/SingleMovieDescription';
import FiltersScreen from '../../features/videos/page/FiltersScreen';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import ShortcutToFilters from '../../features/videos/components/FiltersScreen/ShortcutToFilters';


const navigation = createStackNavigator(
  {
    [NavigationName.HOME]: HomeScreen,
    [NavigationName.MOVIELIST]: MoviesList,
    [NavigationName.SINGLEMOVIE]: SingleMovie2,
    [NavigationName.SIGNINSCREEN]: SignInScreen,
    [NavigationName.LOGIN]: LogIn,
    [NavigationName.SINGUP]: SignUpScreen,
    [NavigationName.SINGLEMOVIEDESCRIPTION]: SingleMovieDescription,
    [NavigationName.FILTERSSCREEN]: FiltersScreen,
    [NavigationName.MAINSCREENHEADER]: MainScreenHeader,
    [NavigationName.SQUAREOFMOVIE]: SquareToRenderTemp,
    [NavigationName.SHORTCUTTOFILTERS]: ShortcutToFilters,
  },
  {
    initialRouteName: NavigationName.HOME,
  },
);

const AppContainer = createAppContainer(navigation);

export default class AppNavigation extends Component {
  render() {
    return <AppContainer />;
  }
}
