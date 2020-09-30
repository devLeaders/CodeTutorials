import React, {Component} from 'react';
import { NavigationName } from '../NavigationName';
import MoviesList from '../../../features/videos/page/MoviesList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../../../features/common/styles/constans/Color';
import { Alert } from '../../../features/videos/page/Alert';
import { NavOption } from '../../../features/common/components/NavOption'
import FiltersScreen from '../../../features/videos/page/FiltersScreen';
import OwnBottomNav from './OwnBottomNav';
import { ScanScreen } from '../../../features/videos/components/QrScaner/QrScaner';
import SingleMovie from '../../../features/videos/page/SingleMovie';


const Tab = createBottomTabNavigator();
interface TabNavigationProps {
  navigation : any
}
class TabNavigation extends Component <TabNavigationProps> {

  render() {
    return (
        <Tab.Navigator
          initialRouteName={NavigationName.MENU}
          tabBarOptions={{
            activeTintColor: Color.WHITE,
            inactiveTintColor: Color.LIGHTGREY,
            style: {backgroundColor: 'black'}
          }}
          tabBar={OwnBottomNav}
        > 
          <Tab.Screen name={NavigationName.MENU} options={NavOption.optionsMovieList} component={MoviesList} />
          <Tab.Screen name={NavigationName.PLAYLIST} options={NavOption.optionsMovieList} component={MoviesList}/>
          <Tab.Screen name={NavigationName.QRSCANER} options={NavOption.optionsTitle} component={ScanScreen}/>
          <Tab.Screen name={NavigationName.ALERT} options={NavOption.optionsTitle} component={Alert} />
          <Tab.Screen name={NavigationName.FILTERSSCREEN} options={NavOption.optionsTitle}  component={FiltersScreen} />
          <Tab.Screen name={NavigationName.SINGLEMOVIE} component={SingleMovie} />
        </Tab.Navigator>
    );
  }
}
export default TabNavigation