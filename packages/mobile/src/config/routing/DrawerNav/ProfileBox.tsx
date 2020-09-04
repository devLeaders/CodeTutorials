import React from 'react';
import { useNavigation } from '@react-navigation/native';
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


interface ProfileBoxP {
    name: string,
    icon: string,
    mail: string,
    userType: string,
    navigation: any
}

 const ProfileBox = (props:ProfileBoxP)=>{
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
                        onPress={() => props.navigation.navigate(NavigationName.SIGNINSCREEN)}>
                        <ProfileLogout>Wyloguj</ProfileLogout>
                        <LogOutIc source={{uri:'ic_logout'}}/>
                    </LogOut>
                </LogoutWrap> 
        </ProfileWrapButton>
        </ProfileWrap>
    );
}

export default ProfileBox;