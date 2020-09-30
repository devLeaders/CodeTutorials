import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';
import SmallHeaderButton from './SmallHeaderButton';
import { NavigationName } from '../../../../config/routing/NavigationName';
import BigHeaderButton from './BigHeaderButton';
import { NavigationHelpers } from '@react-navigation/native';
import { PlayerType } from '../../../../features/videoPlayer/models/PlayerType';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/src/videos/models'
import  { ImageUtil } from '../Movies/ImageUtils'

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

interface MainScreenHeaderState {
  listVideos: Array<IVideosRespons>
}

export default class MainScreenHeader extends React.Component <MainScreenHeaderProps, MainScreenHeaderState>{
  static navigationOptions = {
      headerShown: false,
  };

  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public getData = async ()=>{
    try{
      const listVideos = await AuthConnectors.getVideos({limit:1});
      this.setState ({
        listVideos:listVideos.data
      })
    } catch(error){
      console.log(error)
    }
  }

   componentDidMount(){
    this.getData()
  }

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
      {(this.state.listVideos.length != 0)? 
      <>
        <HeaderImage source={ {uri: ImageUtil.getImageFromServer(this.state.listVideos[0]?.urlPhoto).toString()} }/>
        <ButtonsWraper>
          <SmallHeaderButton 
                text="PlayLista"
                onPress= {()=> this.props.navigation.navigate(NavigationName.MENU)}
                image="plus"
          />
          <BigHeaderButton 
                text="Odtwórz"
                image="play"
                onPress={this.onPressPlay}
          />
          <SmallHeaderButton 
                text="Informacje"
                onPress= {()=>this.props.navigation.navigate(NavigationName.MENU)}
                image="info"
          />
        </ButtonsWraper>
      </>
      :
        <Text>Brak</Text>}
      </ScrollView>
      
    );
  }
}


