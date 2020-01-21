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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Here we can import new screens
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ContextAPIHome from './src/screens/ContextAPIHome';
import AxiosExample from './src/screens/AxiosExample';

//Can we move the navigation to separate component...??
const navigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Context: ContextAPIHome,
    AxiosExample: AxiosExample,
    
    //here we can add new screen name
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(navigation);

export default class App extends Component {
  render() {
    return (
    <AppContainer />
    )
  }
}