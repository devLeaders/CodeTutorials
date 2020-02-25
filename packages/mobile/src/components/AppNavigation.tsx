/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { Component } from 'react';
//navigation import
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationName } from '../variables/NavigationName';

// Here we can import new screens
import HomeScreen from '../screens/HomeScreen';
import { MoviesList } from '../screens/Movies/MoviesList';


const navigation = createStackNavigator(
  {
    [NavigationName.HOME]: HomeScreen,
    [NavigationName.MOVIELIST]: MoviesList

    //here we can add new screen name
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(navigation);

export default class AppNavigation extends Component {
  render() {
    return (
    <AppContainer />
    )
  }
}