import React, { useCallback, useState } from "react"
import { getYoutubeId } from "./QrService"
import { NavigationName } from "../../../../config/routing/NavigationName"
import { PlayerType } from "../../../../features/videoPlayer/models/PlayerType"
import { Linking, ToastAndroid } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const useProcessQr = () => {

    const navigation = useNavigation();
    const [error, setError ] = useState<null|string>(null)

    const processQr = useCallback(async (e) => {
        const res = await fetch(e.data)
        const youtubeId = getYoutubeId(res.url)
        if(youtubeId){
            navigation.navigate(NavigationName.VIDEOPLAYER,{
            playerType: PlayerType.YOUTUBE,
            videoId:youtubeId
        })
        } else {
            Linking.openURL(e.data).catch(()=>{
                setError('Nie udało sie otworzyć strony')
            })
        }
    },[]);
    
    return {
        processQr,
        error
    };
}