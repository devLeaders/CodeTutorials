
import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Linking,
  SafeAreaView,
  ScrollView
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { NavigationName } from './NavigationName';
import queryString from 'query-string';
import styled from 'styled-components/native'
import { MyText } from '../../features/common/styles/MyText';
import { FontSize } from '../../features/common/styles/constans/FontSize';
import { FontWeight } from '../../features/common/styles/constans/FontWeight';
import { Color } from '../../features/common/styles/constans/Color';
import { PlayerType } from '../../features/videoPlayer/models/PlayerType';

export const Title = styled(MyText)({
  fontSize: FontSize.MIDPLUS,
  fontWeight: parseInt(FontWeight.BOLD, 10),
  textAlign: "center",
  color: Color.GREY,
  flex: 1,
  paddingTop: 20,
  paddingBottom: 80
})
interface ScanScreenP {
    navigation: any
}

export class ScanScreen extends Component <ScanScreenP> {

    protected getYoutubeId = (url:string) =>{
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

    onRead = (e) => {
        fetch(e.data).then((res)=>{
            const youtubeId = this.getYoutubeId(res.url)
            if(youtubeId){
              this.props.navigation.navigate(NavigationName.VIDEOPLAYER,{
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

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <QRCodeScanner
            onRead={this.onRead}
            topContent={
              <Title>
                Zeskanuj QR code z ksiąki Przemysława Bykowskiego
              </Title> 
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('default', () => ScanScreen);