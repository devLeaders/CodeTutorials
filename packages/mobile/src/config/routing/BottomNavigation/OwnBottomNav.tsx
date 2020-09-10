import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationName } from '../NavigationName';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Color } from '../../../features/common/styles/constans/Color';
import { HamburgerIc, TeamIc, TasksIc, PlayListIc, SearchWIc } from '../../../features/common/components/TabBottomNavStyle';
import AlertIcon from './AlertIcon';

const myMap = new Map([
  [NavigationName.MENU, <HamburgerIc source={{uri:'ic_burger'}}/>],
  [NavigationName.QRSCANER, <TeamIc source={{uri:'ic_team'}}/>],
  [NavigationName.TASKS, <TasksIc source={{uri:'ic_tasks'}}/>],
  [NavigationName.PLAYLIST, <PlayListIc source={{uri:'ic_playlist'}}/>],
  [NavigationName.ALERT,  <AlertIcon  />],
  [NavigationName.FILTERSSCREEN, <SearchWIc source={{uri:'ic_searchw'}}/>],
]);

function OwnBottomNav(props) {
  const { state, descriptors, navigation, name } = props
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{flexDirection: 'row',height:80, ...props.style }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
            if(route.name == NavigationName.MENU){
                navigation.dispatch(DrawerActions.openDrawer())
            } else{
                navigation.navigate(route.name);
            }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1}}
            >
              <View style={{alignItems:'center',marginTop:10}} >
                {myMap.get(route.name)}
                <Text style={{ color: isFocused ? Color.WHITE : Color.WHITE }}>
                  {label}
                </Text>
              </View>
              
            </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default OwnBottomNav