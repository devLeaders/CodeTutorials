import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { MenuIcon } from './BottomNavigation/MenuIcon';
import { NavigationName } from './NavigationName';
import { Background } from 'src/features/videos/components/SingleScreen/SingleMovieStyle2';

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