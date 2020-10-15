import React, { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useToken = () => {

    const [token, setToken ] = useState<any>('')
    const [error, setError ] = useState<null|string>(null)

    const getToken = useCallback(async(e) => {
        let isCancelled = false;
        try{
            const token = await AsyncStorage.getItem('token')
            if(!isCancelled){
                setToken(token)
            }
        } catch (err) {
            return err
        } 
        return () => {
            isCancelled = true;
        }
    },[]);
    return {
        getToken,
        error
    };
}