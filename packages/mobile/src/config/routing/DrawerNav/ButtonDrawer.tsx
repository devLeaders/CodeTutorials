import React from 'react';
import { NavigationName } from '../NavigationName';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, ButtonDraw, IcDraw, TextButton } from './DrawerStyle';


interface ButtonDrawerP {
    text: string,
    goto: NavigationName,
    icon: string,
    navigation: any
}

const ButtonDrawer = (props:ButtonDrawerP) =>{
        return(
        <Wrapper>
            <ButtonDraw
                onPress={() => props.navigation.navigate(props.goto)}>
            <IcDraw source={{uri: props.icon}}/>
            <TextButton>{ props.text}</TextButton>
            </ButtonDraw>
         </Wrapper>

    );
}

export default ButtonDrawer;