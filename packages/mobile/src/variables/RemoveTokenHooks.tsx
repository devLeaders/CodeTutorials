import React, {useState, useCallback} from 'react';
import { DrawerActions, useNavigation, } from '@react-navigation/native';
import { NavigationName } from '../config/routing/NavigationName';
import { CommonActions } from '@react-navigation/native';
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import AsyncStorage from '@react-native-community/async-storage';


export const useRemoveToken = (navigation) => {

    const [error, setError ] = useState<null|string>(null)
    const removeToken = useCallback(async(e) => {
        try {
            await AsyncStorage.removeItem('token');
            AxioiInstance.defaults.headers.common['Authorization'] = ``;
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.dispatch(
                CommonActions.reset({
                index: 0,
                routes: [
                    { name: NavigationName.SIGNINSCREEN },
                ],
                })
            );
        }
        catch(exception) {
            return false;
        }
    },[]);
    
    return {
        removeToken,
        error
    };
}