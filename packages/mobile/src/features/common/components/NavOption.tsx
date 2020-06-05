import * as React from 'react'
import { HeaderTitle } from '../../videos/components/Movies/HeaderTitle';
import { HeaderLeft } from '../../videos/components/Movies/HeaderLeft';
import { HeaderRight } from '../../videos/components/Movies/HeaderRight';


export class NavOption extends React.Component {
    static optionsMovieList = () => {
        return {
            title: 'Play Lista',
            headerStyle: {
             backgroundColor: '#f0f2fa',
            },
            headerTitle: () => <HeaderTitle/>,
            headerLeft: () => <HeaderLeft/>,
            headerRight: () => <HeaderRight/>,
        };
      };
    static optionsTabNavigator = () => {
        return {
          headerShown: false
        };
    };
    static optionsMenu = () => {
        return {
            title: 'Menu',
      };
    }
    static optionsTeams = () => {
        return {
            title: 'Zespoły',
      };
    }
    static optionsTasks = () => {
        return {
            title: 'Zadania',
      };
    }
    static optionsAlert = () => {
        return {
            title: 'Alerty',
      };
    }
    static optionsSearch = () => {
        return {
            title: 'Szukaj',
      };
    }
    static optionsSingIn = () => {
        return{
        headerShown : false
        }
    }
    static optionsSingUp = () => {
        return{
        headerShown : false
        }
    }

}