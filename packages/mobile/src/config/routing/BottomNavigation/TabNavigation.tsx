import React, {Component} from 'react';
//navigation import

import { NavigationName } from '../NavigationName';

// Here we can import new screens
import MoviesList from '../../../features/videos/page/MoviesList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TeamsScreen } from '../../../features/videos/page/TeamsScreen';
import { Color } from '../../../features/common/styles/constans/Color';
import { 
    HamburgerIc, 
    TeamIc,
    TasksIc, 
    PlayListIc, 
    SearchWIc } from "../../../features/common/components/TabBottomNavStyle";
import { Tasks } from '../../../features/videos/page/Tasks';
import { Alert } from '../../../features/videos/page/Alert';
import { NavOption } from '../../../features/common/components/NavOption'
import FiltersScreen from '../../../features/videos/page/FiltersScreen';
import AlertIcon from './AlertIcon';
import { MenuIcon } from './MenuIcon';
import { OwnBottomNav } from './OwnBottomNav';


const Tabs = createBottomTabNavigator();

export default class TabNavigation extends Component {

  render() {
    return (
        <Tabs.Navigator
        
          initialRouteName={NavigationName.MENU}
          tabBarOptions={{
            activeTintColor: Color.WHITE,
            inactiveTintColor: Color.LIGHTGREY,
            style: {backgroundColor: 'black'}
          }}
          tabBar={OwnBottomNav}
        > 
          <Tabs.Screen name={NavigationName.DRAWER} options={NavOption.optionsMenu} component={MoviesList} />
          <Tabs.Screen name={NavigationName.TEAMS} options={NavOption.optionsTeams} component={TeamsScreen} />
          <Tabs.Screen name={NavigationName.TASKS} options={NavOption.optionsTasks} component={Tasks} />
          <Tabs.Screen name={NavigationName.PLAYLIST} options={NavOption.optionsMovieList} component={MoviesList} />
          <Tabs.Screen name={NavigationName.ALERT} options={NavOption.optionsAlert} component={Alert} />
          <Tabs.Screen name={NavigationName.FILTERSSCREEN} options={NavOption.optionsSearch}  component={FiltersScreen} />
        </Tabs.Navigator>
    );
  }
}
