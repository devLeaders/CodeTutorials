import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationName } from '../NavigationName';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Color } from '../../../features/common/styles/constans/Color';
import { HamburgerIc, TeamIc, TasksIc, PlayListIc, SearchWIc } from '../../../features/common/components/TabBottomNavStyle';
import AlertIcon from './AlertIcon';
import { FooterButton } from './FooterButton';

const IconsMenu = new Map([
  [NavigationName.MENU, <HamburgerIc source={{uri:'ic_burger'}}/>],
  [NavigationName.QRSCANER, <TeamIc  source={{uri:'ic_qr'}}/>],
  [NavigationName.TASKS, <TasksIc source={{uri:'ic_tasks'}}/>],
  [NavigationName.PLAYLIST, <PlayListIc source={{uri:'ic_playlist'}}/>],
  [NavigationName.ALERT,  <AlertIcon />],
  [NavigationName.FILTERSSCREEN, <SearchWIc source={{uri:'ic_magnifier'}}/>],
]);

function OwnBottomNav(props) {
  const { state, descriptors, name } = props
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{flexDirection: 'row',height:80, ...props.style }}>
      {state.routes.map((route, index) => {
        if(!IconsMenu.get(route.name)) return null;
        
        return (
          <FooterButton key={index} index={ index } route={route } descriptors={ descriptors }>{IconsMenu.get(route.name)}</FooterButton>
        );
      })}
    </View>
  );
}

export default OwnBottomNav