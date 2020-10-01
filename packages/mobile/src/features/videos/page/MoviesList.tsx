import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import {  
  SubTitleLeft,
  SubTitleRight,
  GroupForSubtitle,
  SmallArrow,
  ButtonContainer
} from '../components/Movies/MovieListStyle';
import { SlaiderNormal } from '../components/Movies/SlaiderNormal';
import MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import { useCaseNotification } from '../components/Movies/CaseNotificationForMovies';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/features/videos/models';
interface MovieListP {
  navigation: any
}

export const MoviesList = (props:MovieListP) =>{
  const [listVideos, setListVideos] = useState<Array<IVideosRespons>>([])

  useCaseNotification(props.navigation)


  useEffect(()=>{
    let isCancelled = false;
    (async ()=>{
      try{
        const response = await AuthConnectors.getVideos();
        if(!isCancelled){
          setListVideos(response.data)
        }
      } catch (e) {
          console.log(e)
      }
    })();
    return () => {
      isCancelled = true;
    }
  },[])

  const firstEl = listVideos[0]

  return (
      <SafeAreaView>
          <FlatList 
              ListHeaderComponent= {
                <MainScreenHeader id={firstEl?.id} idYoutube={firstEl?.idYoutube} urlPhoto={firstEl?.urlPhoto}  navigation={props.navigation}/>
              }
              data={[0]} 
              renderItem={()=>{
                return (
                  <View>
                      <SlaiderLarge />
                  </View>
                )
              }} 
              keyExtractor={ (item,index) => index.toString() }
              ListFooterComponent= {
                <View>
                      <GroupForSubtitle>
                        <TouchableOpacity>
                          <SubTitleLeft>DevOps</SubTitleLeft>
                        </TouchableOpacity>
                        <ButtonContainer>
                          <SubTitleRight>Zobacz wszystkie</SubTitleRight>
                          <SmallArrow source={{uri:'ic_arrowright'}}/>
                        </ButtonContainer>
                      </GroupForSubtitle>
                      <View>
                        <SlaiderNormal navigation={props.navigation}/>
                      </View>
                </View>
              }
            /> 
      </SafeAreaView>
    );
}

export default MoviesList;