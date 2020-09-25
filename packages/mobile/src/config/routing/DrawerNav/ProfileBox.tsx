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
import { Text, Image, View, AsyncStorage } from 'react-native';


interface ProfileBoxP {
    name: string,
    icon: string,
    mail: string,
    userType: string,
    navigation: any
}


 const ProfileBox = (props:ProfileBoxP)=>{

   const removeToken = async() => {
        try {
            await AsyncStorage.removeItem('token');
            return props.navigation.navigate(NavigationName.SIGNINSCREEN);
        }
        catch(exception) {
            return false;
        }
    }

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
                        onPress={() => removeToken()}>
                        <ProfileLogout>Wyloguj</ProfileLogout>
                        <LogOutIc source={{uri:'ic_logout'}}/>
                    </LogOut>
                </LogoutWrap> 
        </ProfileWrapButton>
        </ProfileWrap>
    );
}

export default ProfileBox;