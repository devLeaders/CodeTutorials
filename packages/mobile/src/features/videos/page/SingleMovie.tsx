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
import { NavigationHelpers } from '@react-navigation/native';
import HeaderLeftSingle from '../components/SingleScreen/HeaderLeftSingle';



interface SingleMovieProps {
  navigation: NavigationHelpers<any>,
}
export default class SingleMovie extends React.Component <SingleMovieProps>{
  static navigationOptions = {
        headerStyle: {
            backgroundColor: '#00000000',
        },
        headerTransparent: true,
        headerTitle: () => <View />,
        headerLeft: () => <HeaderLeftSingle/>,
  };

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
                <SlaiderLarge  />
              </View>
        </Background>
     </SafeAreaView>

    );
  }
}