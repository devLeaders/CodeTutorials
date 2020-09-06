import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';
import { NavOption } from '../../features/common/components/NavOption';
import HomeScreen from '../../features/videos/page/HomeScreen';
import MainScreenHeader from '../../features/videos/components/MainScreen/MainScreenHeader';
import SquareToRenderTemp from '../../features/videos/components/MainScreen/SquareToRenderTemp';
import MoviesList from '../../features/videos/page/MoviesList';
import FiltersScreen from '../../features/videos/page/FiltersScreen';
import ShortcutToFilters from '../../features/videos/components/FiltersScreen/ShortcutToFilters';
import FilterWithList from '../../features/videos/page/FilterWithList';


const ComponentStack = createStackNavigator();

const ComponentsNavigation = () => (
  <ComponentStack.Navigator>
      <ComponentStack.Screen name={NavigationName.MOVIELIST} options={NavOption.optionsMovieList} component={MoviesList}/>
      <ComponentStack.Screen name={NavigationName.HOME} component={HomeScreen}/> 
      <ComponentStack.Screen name={NavigationName.FILTERSSCREEN} component={FiltersScreen}/>
      <ComponentStack.Screen name={NavigationName.MAINSCREENHEADER} component={MainScreenHeader} />
      <ComponentStack.Screen name={NavigationName.SQUAREOFMOVIE} component={SquareToRenderTemp} />
      <ComponentStack.Screen name={NavigationName.SHORTCUTTOFILTERS} component={ShortcutToFilters} />
      <ComponentStack.Screen name={NavigationName.FILTERWITHLIST} options={NavOption.optionsFilterWithList} component={FilterWithList}/>
 </ComponentStack.Navigator>
)

export default ComponentsNavigation