import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import ReviewDetails from './reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;