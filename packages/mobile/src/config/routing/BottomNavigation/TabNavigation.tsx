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
import { HomeStackScreen } from '../HomeNavigation';
import AlertIcon from './AlertIcon';
import DrawerNavigation from '../DrawerNavigation';
import { View, TouchableOpacity, Text } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { MenuIcon } from './MenuIcon';
import { DrawerContent } from '../DrawerContentScreen';
import { TestButton } from './TestButton';


const Tabs = createBottomTabNavigator();

const kvArray = [
  [NavigationName.MENU, <HamburgerIc source={{uri:'ic_burger'}}/>],
  [NavigationName.TEAMS, <TeamIc source={{uri:'ic_team'}}/>],
  [NavigationName.TASKS, <TasksIc source={{uri:'ic_tasks'}}/>],
  [NavigationName.PLAYLIST, <PlayListIc source={{uri:'ic_playlist'}}/>],
  [NavigationName.ALERT,  <AlertIcon  />],
  [NavigationName.FILTERSSCREEN, <SearchWIc source={{uri:'ic_searchw'}}/>],
  [NavigationName.DRAWER,  <MenuIcon/>],
];

const myMap = new Map(kvArray as Array<any>);

export default class TabNavigation extends Component {
  
  public screenOptions = ({ route }) => ({
    tabBarIcon: (): any => {
        return myMap.get(route.name)
    }
  })

  render() {
    return (
        <Tabs.Navigator
          screenOptions={this.screenOptions}
          initialRouteName={NavigationName.MENU}
          tabBarOptions={{
            activeTintColor: Color.WHITE,
            inactiveTintColor: Color.LIGHTGREY,
            style: {backgroundColor: 'black'}
          }}
          tabBar={TestButton}
        > 
          <Tabs.Screen name={NavigationName.DRAWER} options={NavOption.optionsMenu} component={MoviesList} />
          <Tabs.Screen name={NavigationName.TEAMS} options={NavOption.optionsTeams} component={TeamsScreen} />
          <Tabs.Screen name={NavigationName.TASKS} options={NavOption.optionsTasks} component={Tasks} />
          <Tabs.Screen name={NavigationName.PLAYLIST} options={NavOption.optionsMovieList} component={MoviesList} />
          <Tabs.Screen name={NavigationName.ALERT} options={NavOption.optionsAlert} component={Alert} />
          <Tabs.Screen name={NavigationName.FILTERSSCREEN} options={NavOption.optionsSearch}  component={FiltersScreen} />
          {/* <Tabs.Screen name={NavigationName.DRAWER} options={NavOption.optionsMenu} component={DrawerContent} /> */}
        </Tabs.Navigator>
    );
  }
}
