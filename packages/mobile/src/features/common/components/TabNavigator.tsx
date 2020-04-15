import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../../../config/routing/ParamList';
import { NavigationName } from '../../../config/routing/NavigationName';
import HomeScreen from '../../videos/page/HomeScreen';
import MoviesList from '../../videos/page/MoviesList';
import { TeamsScreen } from '../../videos/page/TeamsScreen';
import { Color } from '../styles/constans/Color';
import { 
    HamburgerIc, 
    TeamIc,
    TasksIc, 
    PlayListIc, 
    AlertV, 
    AlertIc, 
    AlertView, 
    AlertText, 
    SearchWIc } from "./TabBottomNavStyle";


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

interface TabNavigatorProps {

}

const Tabs = createBottomTabNavigator<ParamList>();

export const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {
        return (
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) : any => {
                        return myMap.get(route.name)
                }
                })}
              tabBarOptions={{
                activeTintColor: Color.WHITE,
                inactiveTintColor: Color.LIGHTGREY,
                style: {backgroundColor: 'black'}
              }}
            >
                <Tabs.Screen name={NavigationName.MENU} component={HomeScreen} />
                <Tabs.Screen name={NavigationName.TEAMS} component={TeamsScreen} />
                <Tabs.Screen name={NavigationName.TASKS} component={MoviesList} />
                <Tabs.Screen name={NavigationName.PLAYLIST} component={HomeScreen} />
                <Tabs.Screen name={NavigationName.ALERT} component={TeamsScreen} />
                <Tabs.Screen name={NavigationName.SEARCH} component={MoviesList} />
            </Tabs.Navigator>
        );
}