import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import SmallHeaderButton from './SmallHeaderButton';
import { NavigationName } from '../../../../config/routing/NavigationName';
import BigHeaderButton from './BigHeaderButton';
import { NavigationHelpers } from '@react-navigation/native';
import { PlayerType } from '../../../../features/videoPlayer/models/PlayerType';


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

interface MainScreenHeaderProps {
  navigation: NavigationHelpers<any>,
}

export default class MainScreenHeader extends React.Component <MainScreenHeaderProps, any>{
  static navigationOptions = {
      headerShown: false,
  };

  onPressPlay = ()=>{
    this.props.navigation.navigate(NavigationName.VIDEOPLAYER,{
      playerType: PlayerType.YOUTUBE,
      videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      youtubeId:"KVZ-P-ZI6W4"
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
                image="play"
                onPress={this.onPressPlay}
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


