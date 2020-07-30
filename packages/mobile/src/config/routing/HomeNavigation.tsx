import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import HomeScreen from '../../features/videos/page/HomeScreen';
import SingleMovieDescription from '../../features/videos/components/SingleScreen/SingleMovieDescription';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import { NavigationName } from './NavigationName';
import { NavOption } from '../../features/common/components/NavOption';
import MoviesList from '../../features/videos/page/MoviesList';
import FiltersScreen from '../../features/videos/page/FiltersScreen';


const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
      <HomeStack.Screen name={NavigationName.MOVIELIST} options={NavOption.optionsMenu} component={MoviesList}/>
      <HomeStack.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie2}/>
      <HomeStack.Screen name={NavigationName.HOME} component={HomeScreen}/> 
      <HomeStack.Screen name={NavigationName.SINGLEMOVIEDESCRIPTION} component={SingleMovieDescription} />
      <HomeStack.Screen name={NavigationName.FILTERSSCREEN} component={FiltersScreen} />
      <HomeStack.Screen name={NavigationName.MAINSCREENHEADER} component={MainScreenHeader} />
      <HomeStack.Screen name={NavigationName.SQUAREOFMOVIE} component={SquareToRenderTemp} />
  </HomeStack.Navigator>
)
