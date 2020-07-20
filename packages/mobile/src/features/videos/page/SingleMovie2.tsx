import React from 'react';
import {View } from 'react-native';
import {
  Background, Title,
} from '../components/SingleScreen/SingleMovieStyle2';
import  MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import MainDescription from '../components/SingleScreen/MainDescription';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import { SafeAreaView } from 'react-native-safe-area-context';


interface SingleMovie2Props {
  navigation: any
}

export default class SingleMovie2 extends React.Component <SingleMovie2Props>{

  render() {
    return (
      <SafeAreaView>
        <Background>
            <MainScreenHeader navigation={this.props.navigation} />  
            <MainDescription 
                title="Docker od podstaw"
                autor="Przemysław Bykowski"
                description="Interdum et malesuada fames ac ante ipsum primis in faucibus. In sed tristique ante, vitae eleifend erat. Curabitur euismod eros nec tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl rhoncus nisi, ac cursus urna nibh id enim. Morbi a rutrum dolor. Aliquam quis massa est. Pellentesque eget urna in justo ornare pellentesque."
                navigation={this.props.navigation}
              />
            <Title>Podobne</Title>
              <View style={{justifyContent:'center',alignItems:'center', marginLeft:20}}>
                <SlaiderLarge/>
              </View>
        </Background>
     </SafeAreaView>

    );
  }
}
