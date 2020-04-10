import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../../../config/routing/ParamList'
import { NavigationName } from '../../../config/routing/NavigationName';
import HomeScreen from '../../videos/page/HomeScreen';
import MoviesList from '../../videos/page/MoviesList';

interface TabNavigatorProps {

}

const Tabs = createBottomTabNavigator<ParamList>();

export const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {
        return (
            <Tabs.Navigator>
                <Tabs.Screen name={NavigationName.HOME} component={HomeScreen} />
                <Tabs.Screen name={NavigationName.MOVIELIST} component={MoviesList} />
            </Tabs.Navigator>
        );
}