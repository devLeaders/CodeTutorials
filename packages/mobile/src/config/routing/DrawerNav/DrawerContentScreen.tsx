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

const DrawerContent = (props) => {
    return(
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
                            goto={NavigationName.TASKS}
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
                            goto={NavigationName.TEAMS}
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
    );
}
export default DrawerContent;