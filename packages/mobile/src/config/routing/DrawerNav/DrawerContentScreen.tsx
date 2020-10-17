import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import { useToken } from '../../../variables/TokenHooks';


const DrawerContent = (props) => {
    const { getToken } = useToken()
    return(
        <>
        {(getToken)?
        <View style={{flex:1,  backgroundColor: Color.WHITE}}>
            <DrawerContentScrollView {...props}>
                <DrawerWraper>
                    <WrapWidth>
                        <TitleProfile>Profil</TitleProfile>
                        <ProfileBox 
                            name={'Sebastian'}
                            icon={'ic_profile'}
                            mail={'seba@gmail.com'}
                            userType={'Mentor'}
                            navigation= {props.navigation}
                        />
                    </WrapWidth>
                    <WrapWidth>
                        <ButtonDrawer 
                            goto={NavigationName.ALERT}
                            text='Edytuj profil'
                            icon='ic_drawer'
                            navigation ={props.navigation}
                        />
                        <ButtonDrawer 
                            goto={NavigationName.ALERT}
                            text='Abonament i Faktury'
                            icon='ic_drawer'
                            navigation ={props.navigation}
                        />
                        <ButtonDrawer 
                            goto={NavigationName.SEARCH}
                            text='Obejrzane Filmy'
                            icon='ic_drawer'
                            navigation ={props.navigation}
                        />
                        <ButtonDrawer 
                            goto={NavigationName.PLAYLIST}
                            text='Admin Panel'
                            icon='ic_drawer'
                            navigation ={props.navigation}
                        />
                </WrapWidth>
                </DrawerWraper>
            </DrawerContentScrollView>
        </View>
        : <View></View>}
        </>
    );
}
export default DrawerContent;