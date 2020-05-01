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
<<<<<<< HEAD
import Temp from '../..//features/videos/page/Temp';
import FiltersScreen from '../../features/videos/page/FiltersScreen';
=======
import SingleMovieDescription from '../../features/videos/components/SingleScreen/SingleMovieDescription';
>>>>>>> qa2



const navigation = createStackNavigator(
  {
    [NavigationName.HOME]: HomeScreen,
    [NavigationName.MOVIELIST]: MoviesList,
    [NavigationName.SINGLEMOVIE]: SingleMovie2,
    [NavigationName.SIGNINSCREEN]: SignInScreen,
    [NavigationName.LOGIN]: LogIn,
    [NavigationName.SINGUP]: SignUpScreen,
<<<<<<< HEAD
    [NavigationName.TEMP]: Temp,
    [NavigationName.FILTERSSCREEN]: FiltersScreen,
  },
  {
<<<<<<<< HEAD:packages/mobile/src/config/routing/AppNavigation.tsx
    initialRouteName: NavigationName.HOME,
  },
========
    initialRouteName: 'Home',
  }
>>>>>>>> qa2:packages/mobile/src/components/AppNavigation.tsx
=======
    [NavigationName.SINGLEMOVIEDESCRIPTION]: SingleMovieDescription,
  },
  {
    initialRouteName: NavigationName.HOME,
  },
>>>>>>> qa2
);

const AppContainer = createAppContainer(navigation);

export default class AppNavigation extends Component {
  render() {
<<<<<<< HEAD
    return (
    <AppContainer />
    )
  }
}
=======
    return <AppContainer />;
  }
}
>>>>>>> qa2
