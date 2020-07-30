import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { NavigationName } from '../NavigationName';

export function DrawerContent(props) {


    return(
        <View style={{flex:1,  backgroundColor:'red'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Text>Cosssssss</Text>
                    <DrawerItem 
                        label="Bookmarks"
                        onPress={() => {props.navigation.navigate(NavigationName.MENU)}}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },

  });