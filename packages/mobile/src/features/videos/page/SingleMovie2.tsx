import React from 'react';
import {View } from 'react-native';
import {
  Background, Title,
} from '../components/SingleScreen/SingleMovieStyle2';
import  MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import MainDescription from '../components/SingleScreen/MainDescription';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '../../../features/common/styles/constans/Color';
import { NavProps } from '../../../config/routing/ParamList';
import { NavigationName } from '../../../config/routing/NavigationName';


interface SingleMovie2Props {
  navigation: NavProps<NavigationName>,
}

export default class SingleMovie2 extends React.Component <SingleMovie2Props>{
  
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{backgroundColor:Color.DARKGREY}}>
        <Background>
            <MainScreenHeader navigation={navigation}/>  
            <MainDescription 
                title="Docker od podstaw"
                autor="Przemysław Bykowski"
                description="Interdum et malesuada fames ac ante ipsum primis in faucibus. In sed tristique ante, vitae eleifend erat. Curabitur euismod eros nec tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl rhoncus nisi, ac cursus urna nibh id enim. Morbi a rutrum dolor. Aliquam quis massa est. Pellentesque eget urna in justo ornare pellentesque."
                navigation={navigation}
              />
            <Title>Podobne</Title>
              <View style={{justifyContent:'center',alignItems:'center', marginLeft:20}}>
                <SlaiderLarge navigation={navigation}/>
              </View>
        </Background>
     </SafeAreaView>

    );
  }
}