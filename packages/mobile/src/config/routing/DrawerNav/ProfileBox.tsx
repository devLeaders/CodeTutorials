import React from 'react';
import { 
    ProfileImage,
    ProfileName,
    ProfileMail,
    ProfileUser, 
    ProfileLeter,
    LogOut, 
    ProfileLogout, 
    LogOutIc, 
    ProfileWrap,
    ProfileWrapButton,
    LogoutWrap,
    WrapInfo,} from './DrawerStyle';
import { useRemoveToken } from '../../../variables/RemoveTokenHooks';
import { View } from 'react-native';

interface ProfileBoxP {
    name: string |any,
    mail: string |any,
    // userType: string,
    navigation: any
}


 const ProfileBox = (props:ProfileBoxP)=>{

    const { removeToken, error } = useRemoveToken(props.navigation)
    const str = props?.name || props?.mail || ''
    const iconLetter = str.charAt(0)

    return(
        <ProfileWrap>
            {str != undefined?
                <ProfileImage><ProfileLeter>{iconLetter} </ProfileLeter></ProfileImage>
                :
                <View> </View>
            }
            <ProfileWrapButton>
                <WrapInfo>
                    <ProfileName>{ props.name }</ProfileName>
                    <ProfileMail>{ props.mail }</ProfileMail>
                    {/* <ProfileUser>{ props.userType }</ProfileUser> */}
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