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

// Here we can import new screens
import AppNavigation from './src/components/AppNavigation';
import {View} from 'react-native';
import SignUpScreen from './src/screens/SingUpScrenn';

export default class App extends Component {
  render() {
    return <SignUpScreen />;
  }
}
