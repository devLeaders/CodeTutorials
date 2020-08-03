import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { NavigationName } from '../NavigationName';
import ButtonDrawer from './ButtonDrawer';
import { Color } from '../../../features/common/styles/constans/Color';
import { DrawerWraper, TitleProfile, WrapWidth } from './DrawerStyle';
import ProfileBox from './ProfileBox';

export function DrawerContent(props) {


    return(
        <View style={{flex:1,  backgroundColor: Color.WHITE}}>
            <DrawerContentScrollView {...props}>
                <DrawerWraper>
                    <WrapWidth>
                        <TitleProfile>Profil</TitleProfile>
                        <ProfileBox 
                            name={'Sebastian'}
                            icon={'useric'}
                            mail={'seba@gmail.com'}
                            userType={'Mentor'}
                        />
                    </WrapWidth>
                    <WrapWidth>
                        <ButtonDrawer 
                            goto={NavigationName.MOVIELIST}
                            text='Edytuj profil'
                            icon='drawer_ic'
                        />
                        <ButtonDrawer 
                            goto={NavigationName.MOVIELIST}
                            text='Abonament i Faktury'
                            icon='drawer_ic'
                        />
                        <ButtonDrawer 
                            goto={NavigationName.MOVIELIST}
                            text='Obejrzane Filmy'
                            icon='drawer_ic'
                        />
                        <ButtonDrawer 
                            goto={NavigationName.MOVIELIST}
                            text='Admin Panel'
                            icon='drawer_ic'
                        />
                </WrapWidth>
                </DrawerWraper>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },

  });