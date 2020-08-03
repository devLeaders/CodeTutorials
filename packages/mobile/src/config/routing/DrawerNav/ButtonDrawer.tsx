import React from 'react';
import { NavigationName } from '../NavigationName';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, ButtonDraw, IcDraw, TextButton } from './DrawerStyle';


interface ButtonDrawerP {
    text: string,
    goto: NavigationName,
    icon: string
}

export default function ButtonDrawer(props:ButtonDrawerP){
        const navigation = useNavigation()
        return(
        <Wrapper>
            <ButtonDraw
                onPress={() => navigation.navigate(props.goto)}>
            <IcDraw source={{uri: props.icon}}/>
            <TextButton>{ props.text}</TextButton>
            </ButtonDraw>
         </Wrapper>

    );
}