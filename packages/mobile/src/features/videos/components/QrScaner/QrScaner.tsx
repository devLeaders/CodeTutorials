import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styled from 'styled-components/native'
import { MyText } from '../../../common/styles/MyText';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { Color } from '../../../common/styles/constans/Color';
import { useProcessQr } from './QrHooks'


export const ScanScreen = () => {

    const { processQr, error } = useProcessQr()

    return (
      <SafeAreaView>
        <ScrollView>
          <QRCodeScanner
            reactivate={true}
            onRead={processQr}
            topContent={
              <Title>
                Zeskanuj QR code z ksiąki Przemysława Bykowskiego
              </Title> 
            }
          />
          {error && 
            <ErrorBox>
              <Eror>{error}</Eror>
            </ErrorBox>
          }
        </ScrollView>
      </SafeAreaView>
    );
}

export default ScanScreen;


const Title = styled(MyText)({
  fontSize: FontSize.MIDPLUS,
  fontWeight: parseInt(FontWeight.BOLD, 10),
  textAlign: "center",
  color: Color.GREY,
  flex: 1,
  paddingTop: 20,
  paddingBottom: 80
})

const ErrorBox = styled.View({
  backgroundColor: Color.RED,
  width: '100%',
  justifyContent: 'center',
})

const Eror = styled(MyText)({
  fontSize: FontSize.MIDPLUS,
  fontWeight: parseInt(FontWeight.BOLD, 10),
  textAlign: "center",
  color: Color.WHITE,
})