import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import SmallHeaderButton from '../MainScreen/SmallHeaderButton';
import { NavigationName } from '../../../../config/routing/NavigationName';
import BigHeaderButton from '../MainScreen/BigHeaderButton';

const ButtonsWraper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -13px;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 210px;
`;

interface ScreenHederMoviesP {
  navigation: any,
}

export default class ScreenHederMovies extends React.Component <ScreenHederMoviesP, any>{
  static navigationOptions = {
      headerShown: false,
  };

  onPressPlay = ()=>{
    this.props.navigation.navigate(NavigationName.VIDEOPLAYER,{
      playerType:'YOUTUBE',
      videoId:6
    })
  }

  render() {
    return (
      <ScrollView>
        <HeaderImage source={{uri:'mainheader'}}/>
        <ButtonsWraper>
          <SmallHeaderButton 
                text="PlayLista"
                navigation={this.props.navigation}
                goto={NavigationName.HOME}
                image="plus"
          />
          <BigHeaderButton 
                text="Odtwórz"
                onPress={this.onPressPlay}
                image="play"
          />
          <SmallHeaderButton 
                text="Informacje"
                navigation={this.props.navigation}
                goto={NavigationName.HOME}
                image="info"
          />
        </ButtonsWraper>
      </ScrollView>
      
    );
  }
}


