import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Hamburger } from './MovieListStyle'

export const HeaderLeft =(props)=>{
    const nav = useNavigation();
    const drawOpen = () => nav.dispatch(DrawerActions.openDrawer())

    return(
        <TouchableOpacity onPress={drawOpen}>
            <Hamburger source={{uri:'ic_menu'}}/>
        </TouchableOpacity> 
    );
}
