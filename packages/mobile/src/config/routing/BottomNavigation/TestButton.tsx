import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationName } from '../NavigationName';
import { useNavigation, DrawerActions } from '@react-navigation/native'

export function TestButton(props) {
    const { state, descriptors, navigation } = props
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  console.log('props', props)
  return (
    <View style={{ flexDirection: 'row', ...props.style }}>
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
        //   const event = navigation.emit({
        //     type: 'tabPress',
        //     target: route.key,
        //     canPreventDefault: true,
        //   });

        //   if (!isFocused && !event.defaultPrevented) {
        //     navigation.navigate(route.name);
        //   }
            if(route.name == NavigationName.DRAWER){
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
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? 'white' : 'white' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
