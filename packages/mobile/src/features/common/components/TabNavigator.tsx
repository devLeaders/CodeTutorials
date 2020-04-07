import { createAppContainer } from 'react-navigation';
import { NavigationName } from '../../../config/routing/NavigationName';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../../videos/page/HomeScreen';
import MoviesList from '../../videos/page/MoviesList';
import SingleMovie2 from '../../videos/page/SingleMovie2';
import { Color } from '../styles/constans/Color';




const TabNavigator = createMaterialBottomTabNavigator(
    {
        [NavigationName.HOME]: HomeScreen, 
        [NavigationName.MOVIELIST]: MoviesList,
        [NavigationName.SINGLEMOVIE]: SingleMovie2,
    },
    {
        initialRouteName: 'Home',
        activeColor: Color.WHITE,
        inactiveColor: Color.DARK_GREY,
        barStyle: { backgroundColor: Color.BLACK },
      }
  );
  
  export default createAppContainer(TabNavigator);