import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../../../config/routing/ParamList';
import { NavigationName } from '../../../config/routing/NavigationName';
import HomeScreen from '../../videos/page/HomeScreen';
import MoviesList from '../../videos/page/MoviesList';
import { TeamsScreen } from '../../videos/page/TeamsScreen';
import { Image, View, Text } from 'react-native';
import { Color } from '../styles/constans/Color';



interface TabNavigatorProps {

}

const Tabs = createBottomTabNavigator<ParamList>();

export const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {
        return (
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                
                    if (route.name === NavigationName.MENU) {
                        return (
                            <Image source={{uri:'ic_burger'}} style={{width:24, height:20}}/>
                        );
                    } else if (route.name === NavigationName.TEAMS) {
                        return (
                            <Image source={{uri:'ic_team'}} style={{width:26, height:26}}/>
                        );
                    } else if (route.name === NavigationName.TASKS) {
                        return (
                            <Image source={{uri:'ic_tasks'}} style={{width:26, height:26}}/>
                        );
                    } else if (route.name === NavigationName.PLAYLIST) {
                        return (
                            <Image source={{uri:'ic_playlist'}} style={{width:26, height:26}}/>
                        );
                    } else if (route.name === NavigationName.ALERT) {
                        return (
                            <View style={{position:"relative"}}>
                                <Image source={{uri:'ic_alert'}} style={{width:21, height:26, }}/>
                                <View style={{borderWidth:2, width:18, height:19, borderRadius: 18/2, borderColor:"#ffffff",position:"absolute", right:0, top:0, marginLeft:10}}>
                                    <Text style={{fontSize:10, color:"#ffffff", fontWeight:"600"}}>2</Text>
                                </View>
                            </View>
                        );
                    } else if (route.name === NavigationName.SEARCH) {
                        return (
                            <Image source={{uri:'ic_searchW'}} style={{width:24, height:24}}/>
                        );
                    }
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