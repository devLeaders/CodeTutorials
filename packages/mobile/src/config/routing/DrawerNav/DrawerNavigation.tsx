import * as React from 'react';
import { Button, View, StyleSheet, Text, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationName } from '../NavigationName';
import TabNavigation from '../BottomNavigation/TabNavigation';
import MoviesList from '../../../features/videos/page/MoviesList';
import { NavOption } from '../../../features/common/components/NavOption';
import { DrawerContent } from './DrawerContentScreen';
import { HomeStackScreen } from '../HomeNavigation';

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button
          title="Click Here"
          onPress={() => ('Button Clicked!')}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> 
        <Drawer.Screen name={NavigationName.MENU} options={NavOption.optionsMenu} component={TabNavigation} />
        <Drawer.Screen name={NavigationName.MOVIELIST} component={HomeStackScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
  );
}