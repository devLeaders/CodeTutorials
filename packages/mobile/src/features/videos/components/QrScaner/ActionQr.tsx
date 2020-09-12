import * as React from "react";
import { PlayerType } from '../../../videoPlayer/models/PlayerType';
import { NavigationName } from '../../../../config/routing/NavigationName';
import queryString from 'query-string';
import { Linking, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const navigation = useNavigation();

const getYoutubeId = (url:string) =>{
    const checkValue = url.includes('youtube.com')
    if(checkValue){
        const searchQuestionMark = url.lastIndexOf('?')
        const findObj = url.substring(searchQuestionMark,url.length)
        const parsed = queryString.parse(findObj);
        return parsed.v
    } else{
        return null;
    }
}
  
export const onRead = (e) => {
    fetch(e.data).then((res)=>{
        const youtubeId = getYoutubeId(res.url)
            if(youtubeId){
                navigation.navigate(NavigationName.VIDEOPLAYER,{
                playerType: PlayerType.YOUTUBE,
                videoId:youtubeId
            })
            } else {
                Linking.openURL(e.data).catch((error)=>{
                  return(
                    <Text>Qr code nie istnieje</Text>
                  )
                })
            }
    })
}
