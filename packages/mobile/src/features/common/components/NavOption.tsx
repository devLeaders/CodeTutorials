import * as React from 'react'
import { HeaderTitle } from '../../videos/components/Movies/HeaderTitle';
import { HeaderLeft } from '../../videos/components/Movies/HeaderLeft';
import { HeaderRight } from '../../videos/components/Movies/HeaderRight';
import HeaderLeftSingle from '../../../features/videos/components/SingleScreen/HeaderLeftSingle';
import { View } from 'react-native';
import { NavigationName } from '../../../config/routing/NavigationName';

export const mapName = new Map([
    [NavigationName.MENU, 'Menu'],
    [NavigationName.QRSCANER, 'Qr Scaner'],
    [NavigationName.TASKS, 'Zadania'],
    [NavigationName.PLAYLIST, 'Play Lista'],
    [NavigationName.ALERT, 'Alerty'],
    [NavigationName.FILTERSSCREEN, 'Szukaj'],
])
export class NavOption extends React.Component {

    static optionsTitle = (navigationObj) => {
        return {
            title: mapName.get(navigationObj?.route?.name),
      };
    }

    static optionsNoHeder = () => {
        return {
          headerShown: false
        };
    };

    static optionsMovieList = (navigationObj) => {
        return {
            title: mapName.get(navigationObj?.route?.name),
            headerStyle: {
             backgroundColor: '#f0f2fa',
            },
            headerTitle: () => <HeaderTitle/>,
            headerLeft: () => <HeaderLeft/>,
            headerRight: () => <HeaderRight/>,
        };
      };
 
    static optionsSingleMovie = () => {
        return {
            headerStyle: {
                backgroundColor: '#00000000',
            },
            headerTransparent: true,
            headerTitle: () => <View />,
            headerLeft: () => <HeaderLeftSingle/>,
        };
      };

    static optionsDrawer = () => {
        return{
            headerTransparent: true,
            headerTitle: () => <View />,
            headerLeft: () => <View />,
            headerStyle: {
                backgroundColor: '#00000000',
            }
        }
    } 

}