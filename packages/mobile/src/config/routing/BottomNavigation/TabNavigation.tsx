import React, {Component} from 'react';
import { NavigationName } from '../NavigationName';
import MoviesList from '../../../features/videos/page/MoviesList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TeamsScreen } from '../../../features/videos/page/TeamsScreen';
import { Color } from '../../../features/common/styles/constans/Color';
import { Tasks } from '../../../features/videos/page/Tasks';
import { Alert } from '../../../features/videos/page/Alert';
import { NavOption } from '../../../features/common/components/NavOption'
import FiltersScreen from '../../../features/videos/page/FiltersScreen';
import OwnBottomNav from './OwnBottomNav';
import { ScanScreen } from '../QrScaner';


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
          <Tab.Screen name={NavigationName.MENU} options={NavOption.optionsMenu} component={MoviesList} />
          <Tab.Screen name={NavigationName.PLAYLIST} options={NavOption.optionsMovieList} component={MoviesList}/>
          <Tab.Screen name={NavigationName.QRSCANER} options={NavOption.optionsQrcode} component={ScanScreen}/>
          <Tab.Screen name={NavigationName.ALERT} options={NavOption.optionsAlert} component={Alert} />
          <Tab.Screen name={NavigationName.FILTERSSCREEN} options={NavOption.optionsSearch}  component={FiltersScreen} />
        </Tab.Navigator>
    );
  }
}
export default TabNavigation