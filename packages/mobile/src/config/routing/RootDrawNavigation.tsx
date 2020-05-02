import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks

import AppNavigation from './AppNavigation';
import DrawNavigation from './DrawNavigation';

import HomeScreen from '../../features/videos/page/HomeScreen';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
// drawer navigation options
const RootDrawerNavigation = createDrawerNavigator({
  Home: {
    screen: SingleMovie2,
  },
  About: {
    screen: HomeScreen,
  },
});

export default createAppContainer(RootDrawerNavigation);