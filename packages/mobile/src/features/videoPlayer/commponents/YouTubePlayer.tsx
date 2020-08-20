import React from "react";
import { Platform } from "react-native";
import YouTube from "react-native-youtube";
import { IPlayer } from "../models/IPlayer";
import Global from '../../common/models/Global';


export const YouTubePlayer = (props:IPlayer) =>{

    const height = (Platform.OS=='ios')?"100%":0;

    console.log(Global.env.GOOGLE_KEY,props);

    return (
      <YouTube
        //@ts-ignore-start
        apiKey={Global.env.GOOGLE_KEY}
        // @ts-ignore-end
        videoId={props.videoAccess}
        autoplay
        fullscreen={true}
        showFullscreenButton={true}
        style={{height}}
        onError={props.onError}
        onChangeFullscreen={props.onChangeFullscreen}
      />
    )
  }