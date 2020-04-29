import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from './ParamList';
import { NavigationName } from './NavigationName';
import HomeScreen from '../../features/videos/page/HomeScreen';
import MoviesList from '../../features/videos/page/MoviesList';
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
import SingleMovie2 from '../../features/videos/page/SingleMovie2';
import { Search } from '../../features/videos/page/Search';

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

const Tabs = createBottomTabNavigator();

export const TabNavigator: React.FC = ({}) => {
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
                <Tabs.Screen name={NavigationName.MENU} options={{title: NavigationName.MENU}} component={HomeScreen} />
                <Tabs.Screen name={NavigationName.TEAMS} options={{title: NavigationName.TASKS}} component={TeamsScreen} />
                <Tabs.Screen name={NavigationName.TASKS} component={MoviesList} />
                <Tabs.Screen name={NavigationName.PLAYLIST} component={HomeScreen} />
                <Tabs.Screen name={NavigationName.ALERT} component={TeamsScreen} />
                <Tabs.Screen name={NavigationName.SEARCH}  component={Search} />
            </Tabs.Navigator>
        );
}