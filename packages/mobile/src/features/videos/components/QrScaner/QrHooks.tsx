import React, { useCallback } from "react"
import { getYoutubeId } from "./QrService"
import { NavigationName } from "src/config/routing/NavigationName"
import { PlayerType } from "src/features/videoPlayer/models/PlayerType"
import { Linking } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const useProcessQr = () => {

    const navigation = useNavigation();

    const processQr = useCallback(async (e) => {
        const res = await fetch(e.data)
        const youtubeId = getYoutubeId(res.url)
        if(youtubeId){
            navigation.navigate(NavigationName.VIDEOPLAYER,{
            playerType: PlayerType.YOUTUBE,
            videoId:youtubeId
        })
        } else {
            Linking.openURL(e.data).catch((error)=>{
                return(
                    console.log(error)
                )
                })
            }
    },[]);
    
    return processQr;
}