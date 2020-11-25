import React, { useEffect, useState } from 'react';
import { View, } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Color } from '../../../features/common/styles/constans/Color';
import { DrawerWraper, TitleProfile, WrapWidth } from './DrawerStyle';
import ProfileBox from './ProfileBox';
import AsyncStorage from '@react-native-community/async-storage';
import { useToken } from '../../../variables/TokenHooks';
import * as AuthConnectors from '@project/common/features/auth/connectors'
import { IUserDataRespons } from '@project/common/features/auth/models';
import { DrawerActions } from '@react-navigation/native';

const DrawerContent = (props) => {
    const { getToken } = useToken()
    const [ user, setUser] = useState<IUserDataRespons>()

      const fetchData = async () => {
        const token = await AsyncStorage.getItem('token') 
        const result = await AuthConnectors.userData({
            Authorization: `Bearer ${token}`
        });
        setUser(result.data);
      };
    
    const checkIsDataUser = ()=> {
        if(DrawerActions.openDrawer()){
            fetchData()
        } 
    }

    useEffect(()=>{
        checkIsDataUser()
    },[user])

    return(
        <>
        {(getToken )?
        <View style={{flex:1,  backgroundColor: Color.WHITE}}>
            <DrawerContentScrollView {...props}>
                <DrawerWraper>
                    <WrapWidth>
                        <TitleProfile>Profil</TitleProfile>
                        <ProfileBox 
                            name={user?.name}
                            mail={user?.email}
                            // userType={'Mentor'}
                            navigation= {props.navigation}
                        />
                    </WrapWidth>
                    {/* <WrapWidth> */}
                        {/* <ButtonDrawer 
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
                        /> */}
                {/* </WrapWidth> */}
                </DrawerWraper>
            </DrawerContentScrollView>
        </View>
        : <View></View>}
        </>
    );
}
export default DrawerContent;