import React from "react";
import { View} from "react-native";
import Orientation from "react-native-orientation";
import {NavigationProp, RouteProp } from "@react-navigation/native";
import { YouTubePlayer } from "../commponents/YouTubePlayer";
import { PlayerType } from "../models/PlayerType";



type VideoPlayerRouteParam = {
    playerType: PlayerType
    videoUrl: string,
    youtubeId:string
}

type Props = {
  navigation: NavigationProp<any>;
  route:RouteProp<any,any>
};

export class VideoPlayerScreen extends React.Component<Props,any> {

  unsubscribeFocuse = ()=>{};

  componentDidMount(){
      Orientation.lockToLandscapeLeft();
      this.unsubscribeFocuse = this.props.navigation.addListener('blur',()=>{
        Orientation.lockToPortrait();
      })
  }

  onChangeFullscreen = (e?:any) =>{
    if(!e?.isFullscreen){ 
      Orientation.lockToPortrait();
      this.props.navigation.goBack();
    }
  }

  onError = ()=>{
      //throw new Error('Video load error');
  }

  render(){
      const {playerType,youtubeId,videoUrl} = this.props.route.params as VideoPlayerRouteParam;
      

        return(
        <View style={{backgroundColor:'#000000',flex:1}}>
            <YouTubePlayer 
              videoAccess={youtubeId}
              onChangeFullscreen={this.onChangeFullscreen}
              onError={this.onError}
             />
        </View>)
  }

  componentWillUnmount(){
    this.unsubscribeFocuse();
  }
}