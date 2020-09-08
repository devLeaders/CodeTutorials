
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { NavigationName } from './NavigationName';

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
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
    }

  render() {
    return (
        <QRCodeScanner
        onRead={this.onRead}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Scann your QR code
            {console.log(this.state.qr)}
          </Text> 
        }
        bottomContent={
            <>
            <Text>{this.state.qr}</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate(NavigationName.MENU)}} style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Powrót</Text>
          </TouchableOpacity>
          </>
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