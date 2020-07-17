import React from 'react';
import {View } from 'react-native';
import {
  Background,
} from '../components/SingleScreen/SingleMovieStyle2';
import {HeaderLeft} from '../components/SingleScreen/HeaderLeft';
import  MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import MainDescription from '../components/SingleScreen/MainDescription';


interface SingleMovie2Props {
  navigation: any
}

export default class SingleMovie2 extends React.Component <SingleMovie2Props>{
  static navigationOptions = (navigation) => {
    return {
      headerStyle: {
        backgroundColor: '#00000000',
        paddingTop: 50,
      },
      headerTransparent: true,

      headerTitle: () => <View />,
      headerLeft: () => <HeaderLeft navigation={navigation} />,

    };
  };

  render() {
    return (
      <Background>
          <MainScreenHeader navigation={this.props.navigation} />  
           <MainDescription 
              title="Docker od podstaw"
              autor="Przemysław Bykowski"
              description="Interdum et malesuada fames ac ante ipsum primis in faucibus. In sed tristique ante, vitae eleifend erat. Curabitur euismod eros nec tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl rhoncus nisi, ac cursus urna nibh id enim. Morbi a rutrum dolor. Aliquam quis massa est. Pellentesque eget urna in justo ornare pellentesque."
              navigation={this.props.navigation}
            />
      </Background>


    );
  }
}
