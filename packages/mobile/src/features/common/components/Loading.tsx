import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'
import { NavigationName } from '../../../config/routing/NavigationName';
import styled from 'styled-components/native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import { Color } from '../styles/constans/Color';

const Bull = styled.Image({
    width: '100%',
    height: '80%',
    backgroundColor: 'transparent'
})

interface LoadingP {
    navigation: any
}

const  Loading = (props: LoadingP) => {

    useEffect(()=>{
        (async function () {
            const token = await AsyncStorage.getItem('token') 
            if(token){
                AxioiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        { name: NavigationName.MENU },
                      ],
                    })
                  );
            } else {
                props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        { name: NavigationName.SIGNINSCREEN},
                      ],
                    })
                );
            }
        })();
    },[])
    

    return(
        <SafeAreaView >
            <View style={{backgroundColor: Color.WHITE, height:'100%'}}>
                <Bull source={{uri:'byk'}}/>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </SafeAreaView>
    )
}

export default Loading;