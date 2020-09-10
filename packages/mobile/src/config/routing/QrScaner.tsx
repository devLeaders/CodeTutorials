
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { NavigationName } from './NavigationName';
import ButtonDrawer from './DrawerNav/ButtonDrawer';
import queryString from 'query-string';
interface ScanScreenP {
    navigation: any
}
interface ScanScreenS {
    qr : string
}

export class ScanScreen extends Component <ScanScreenP,ScanScreenS> {
    constructor(props:any){
        super(props);
        this.state = {
          qr : ''
        }
        this.onRead = this.onRead.bind(this)
    
        const url = 'https://bykowski.pl/books/v3/materials/82';
    }

    protected getYoutubeId = (url:string) =>{
      const checkValue = url.includes('youtube.com')
      if(checkValue){
        const test = url.lastIndexOf('?')
        const cos = url.substring(test,url.length)
        const parsed = queryString.parse(cos);
        console.log(parsed.v)
        return parsed.v
      } else{
        return null;
      }
    }

    onRead = (e) => {
        fetch(e.data).then((res)=>{
            console.log(res.url);
            const youtubeId = this.getYoutubeId(res.url)

            if(youtubeId){
              this.props.navigation.navigate(NavigationName.VIDEOPLAYER,{
                playerType:'YOUTUBE',
                videoId:youtubeId
              })
            } else {
              Linking.openURL(e.data).catch(()=>{
                console.log("cos");
              })
            }
        })
        // this.props.navigation.navigate(NavigationName.SINGLEMOVIE,
        //   {itemId: id})
    }

  render() {
    return (
        <QRCodeScanner
        onRead={this.onRead}
        topContent={
          <Text style={styles.centerText}>
            Zeskanuj QR code z ksiąki Przemysława Bykowskiego
          </Text> 
        }
        bottomContent={
          <View style={{width:150}}>
            <ButtonDrawer 
              goto={NavigationName.MENU}
              text='Powrót'
              icon='ic_drawer'
              navigation ={this.props.navigation}
            />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

AppRegistry.registerComponent('default', () => ScanScreen);