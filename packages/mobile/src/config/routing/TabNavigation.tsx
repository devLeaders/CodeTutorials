import React, {Component} from 'react';
//navigation import
import { NavigationContainer } from '@react-navigation/native';
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
import { Search } from '../../features/videos/page/Search';
import { Tasks } from '../../features/videos/page/Tasks';
import { Alert } from '../../features/videos/page/Alert';
import {HomeStackScreen} from './AppNavigation'
import { NavOption } from '../../features/videos/components/Movies/NavOption'


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
  [NavigationName.SEARCH, <SearchWIc source={{uri:'ic_searchW'}}/>],
];

const myMap = new Map(kvArray as any);

export default class TabNavigation extends Component {
  render() {
    return (
        <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: (): any => {
                        return myMap.get(route.name)
                }
                })}
              tabBarOptions={{
                activeTintColor: Color.WHITE,
                inactiveTintColor: Color.LIGHTGREY,
                style: {backgroundColor: 'black'}
              }}
            >
                <Tabs.Screen name={NavigationName.MENU} options={{title: 'Menu'}} component={HomeStackScreen} />
                <Tabs.Screen name={NavigationName.TEAMS} options={{title: 'Zespoły'}} component={TeamsScreen} />
                <Tabs.Screen name={NavigationName.TASKS} options={{title: 'Zadania'}} component={Tasks} />
                <Tabs.Screen name={NavigationName.PLAYLIST} options={NavOption.navigationOptions} component={MoviesList} />
                <Tabs.Screen name={NavigationName.ALERT} options={{title: 'Alerty'}} component={Alert} />
                <Tabs.Screen name={NavigationName.SEARCH} options={{title: 'Szukaj'}}  component={Search} />
            </Tabs.Navigator>
    );
  }
}
