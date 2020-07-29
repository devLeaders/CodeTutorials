import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import HomeScreen from '../../features/videos/page/HomeScreen';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import { NavigationName } from './NavigationName';
import { NavOption } from '../../features/common/components/NavOption';
import MoviesList from '../../features/videos/page/MoviesList';
import FiltersScreen from '../../features/videos/page/FiltersScreen';


const HomeStack = createStackNavigator();

export const HomeStackScreen = (navigation) => (
  <HomeStack.Navigator>
      <HomeStack.Screen name={NavigationName.MOVIELIST} options={NavOption.optionsMovieList} component={MoviesList}/>
      <HomeStack.Screen name={NavigationName.SINGLEMOVIE} options={NavOption.optionsSingleMovie(navigation)} component={SingleMovie2}/>
      <HomeStack.Screen name={NavigationName.HOME} component={HomeScreen}/> 
      <HomeStack.Screen name={NavigationName.FILTERSSCREEN} component={FiltersScreen} />
      <HomeStack.Screen name={NavigationName.MAINSCREENHEADER} component={MainScreenHeader} />
      <HomeStack.Screen name={NavigationName.SQUAREOFMOVIE} component={SquareToRenderTemp} />
  </HomeStack.Navigator>
)
