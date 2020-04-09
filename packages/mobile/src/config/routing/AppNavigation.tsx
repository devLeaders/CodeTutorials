import React, {Component} from 'react';
//navigation import
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationName } from './NavigationName';
import { ParamList } from './ParamList'

// Here we can import new screens
import HomeScreen from '../../features/videos/page/HomeScreen';
import MoviesList from '../../features/videos/page/MoviesList';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';

const Stack = createStackNavigator<ParamList>()

export default class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={NavigationName.HOME} component={HomeScreen}/>
          <Stack.Screen name={NavigationName.MOVIELIST} component={MoviesList}/>
          <Stack.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie2}/>
          <Stack.Screen name={NavigationName.SIGNINSCREEN} component={SignInScreen}/>
          <Stack.Screen name={NavigationName.SINGUP} component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
