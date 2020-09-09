
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
    }

    onRead = (e) => {
        this.setState({qr: e.data})
        const id = this.state.qr.split('/')[this.state.qr.split('/').length - 1]
        this.props.navigation.navigate(NavigationName.SINGLEMOVIE,
          {itemId: id})
    }

  render() {
    
    return (
        <QRCodeScanner
        onRead={this.onRead}
        flashMode={RNCamera.Constants.FlashMode.auto}
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