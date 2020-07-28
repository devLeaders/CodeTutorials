import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerItem } from '@react-navigation/drawer'
import { HamburgerIc } from '../../../features/common/components/TabBottomNavStyle'
import { useNavigation, DrawerActions } from '@react-navigation/native'

export const MenuIcon = ()=>{
    const nav = useNavigation()
    return(
        <View>
            <TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                <HamburgerIc source={{uri:'ic_burger'}}/>
            </TouchableOpacity>
        </View>
    )
}