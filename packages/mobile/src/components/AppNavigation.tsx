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
import { NavigationName } from '../variables/NavigationName';

// Here we can import new screens
import HomeScreen from '../screens/HomeScreen';
import { MoviesList } from '../screens/Movies/MoviesList';
import SingleMovie2 from '../screens/SingleScreen/SingleMovie2';
import SignIn from '../screens/SignIn/SignInScrren';
import LogIn from '../screens/SignIn/LogIn';
import SignInScreen from '../screens/SignIn/SignInScrren';


const navigation = createStackNavigator(
  {
    [NavigationName.HOME]: HomeScreen,
    [NavigationName.MOVIELIST]: MoviesList,
    [NavigationName.SINGLEMOVIE]: SingleMovie2,
    [NavigationName.SIGNINSCREEN]: SignInScreen,
    [NavigationName.LOGIN]: LogIn,
    //here we can add new screen name
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(navigation);

export default class AppNavigation extends Component {
  render() {
    return <AppContainer />;
  }
}
