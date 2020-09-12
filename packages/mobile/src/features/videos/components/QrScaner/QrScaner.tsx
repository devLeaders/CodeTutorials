import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styled from 'styled-components/native'
import { MyText } from '../../../common/styles/MyText';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { Color } from '../../../common/styles/constans/Color';
import { useProcessQr } from './QrHooks'

export const ScanScreen = () => {

    const processQr = useProcessQr()

    return (
      <SafeAreaView>
        <ScrollView>
          <QRCodeScanner
            onRead={processQr}
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

export default ScanScreen;


export const Title = styled(MyText)({
  fontSize: FontSize.MIDPLUS,
  fontWeight: parseInt(FontWeight.BOLD, 10),
  textAlign: "center",
  color: Color.GREY,
  flex: 1,
  paddingTop: 20,
  paddingBottom: 80
})