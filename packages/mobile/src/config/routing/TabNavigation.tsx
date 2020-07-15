import React, {Component} from 'react';
//navigation import

import { NavigationName } from './NavigationName';

// Here we can import new screens
import MoviesList from '../../features/videos/page/MoviesList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TeamsScreen } from '../../features/videos/page/TeamsScreen';
import { Color } from '../../features/common/styles/constans/Color';
import { 
    HamburgerIc, 
    TeamIc,
    TasksIc, 
    PlayListIc, 
    AlertV, 
    AlertIc, 
    AlertView, 
    AlertText, 
    SearchWIc } from "../../features/common/components/TabBottomNavStyle";
import { Tasks } from '../../features/videos/page/Tasks';
import { Alert } from '../../features/videos/page/Alert';
import {HomeStackScreen} from './AppNavigation'
import { NavOption } from '../../features/common/components/NavOption'
import FiltersScreen from '../../features/videos/page/FiltersScreen';


const Tabs = createBottomTabNavigator();

const kvArray = [
  [NavigationName.MENU,  <HamburgerIc source={{uri:'ic_burger'}}/>],
  [NavigationName.TEAMS, <TeamIc source={{uri:'ic_team'}}/>],
  [NavigationName.TASKS, <TasksIc source={{uri:'ic_tasks'}}/>],
  [NavigationName.PLAYLIST, <PlayListIc source={{uri:'ic_playlist'}}/>],
  [NavigationName.ALERT,  
      <AlertV>
          <AlertIc source={{uri:'ic_alert'}}/>
          <AlertView>
              <AlertText>2</AlertText>
          </AlertView>
      </AlertV>
  ],
  [NavigationName.FILTERSSCREEN, <SearchWIc source={{uri:'ic_searchw'}}/>],
];

const myMap = new Map(kvArray as any);

export default class TabNavigation extends Component {
  
  public screenOptions = ({ route }) => ({
    tabBarIcon: (): any => {
        return myMap.get(route.name)
    }
  })

  render() {
    return (
        <Tabs.Navigator
          // screenOptions={this.screenOptions}
          tabBarOptions={{
            activeTintColor: Color.WHITE,
            inactiveTintColor: Color.LIGHTGREY,
            style: {backgroundColor: 'black'}
          }}
        >
          <Tabs.Screen name={NavigationName.MENU} options={NavOption.optionsMenu} component={HomeStackScreen} />
          <Tabs.Screen name={NavigationName.TEAMS} options={NavOption.optionsTeams} component={TeamsScreen} />
          <Tabs.Screen name={NavigationName.TASKS} options={NavOption.optionsTasks} component={Tasks} />
          <Tabs.Screen name={NavigationName.PLAYLIST} options={NavOption.optionsMovieList} component={MoviesList} />
          <Tabs.Screen name={NavigationName.ALERT} options={NavOption.optionsAlert} component={Alert} />
          <Tabs.Screen name={NavigationName.FILTERSSCREEN} options={NavOption.optionsSearch}  component={FiltersScreen} />
        </Tabs.Navigator>
    );
  }
}
