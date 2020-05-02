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
// import RootDrawerNavigation from './src/config/routing/RootDrawNavigation';
// import {View} from 'react-native';
// import RootDrawerNavigator from './src/config/routing/drawer';

// export default class App extends Component {
//   render() {
//     return <RootDrawerNavigator />;
//   }
// }
import AppNavigation from './src/config/routing/AppNavigation';
import Navigator from './src/config/routing/drawer';
import App1 from './src/config/routing/drawer2';

//export default class App extends Component {
//  render() {
//    return <AppNavigation />;
//  }
// }


export default function App() {
    return (
     <Navigator />
    );
  }
