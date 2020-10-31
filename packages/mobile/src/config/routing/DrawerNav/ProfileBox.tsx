import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { 
    ProfileImage,
    ProfileName,
    ProfileMail,
    ProfileUser, 
    LogOut, 
    ProfileLogout, 
    LogOutIc, 
    ProfileWrap,
    ProfileWrapButton,
    LogoutWrap,
    WrapInfo,} from './DrawerStyle';
import { NavigationName } from '../NavigationName';
import { Text, Image, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import AsyncStorage from '@react-native-community/async-storage';
import { useRemoveToken } from '../../../variables/RemoveTokenHooks';

interface ProfileBoxP {
    name: string,
    icon: string,
    mail: string,
    userType: string,
    navigation: any
}


 const ProfileBox = (props:ProfileBoxP)=>{

    const { removeToken, error } = useRemoveToken(props.navigation)

    return(
        <ProfileWrap >
            <ProfileImage source={{uri: props.icon}}/> 
            <ProfileWrapButton>
                <WrapInfo>
                    <ProfileName>{ props.name }</ProfileName>
                    <ProfileMail>{ props.mail }</ProfileMail>
                    <ProfileUser>{ props.userType }</ProfileUser>
                </WrapInfo>
                <LogoutWrap>
                    <LogOut
                        onPress={removeToken}>
                        <ProfileLogout>Wyloguj</ProfileLogout>
                        <LogOutIc source={{uri:'ic_logout'}}/> 
                    </LogOut>
                </LogoutWrap> 
        </ProfileWrapButton>
        </ProfileWrap>
    );
}

export default ProfileBox;