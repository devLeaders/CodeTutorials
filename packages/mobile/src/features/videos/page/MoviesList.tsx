import React, {useEffect} from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
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
import { useVideos } from '../../../variables/VideosHooks';
interface MovieListP {
  navigation: any
}

export const MoviesList = (props:MovieListP) =>{

  useCaseNotification(props.navigation)
  const { getVideos, videos} = useVideos()
  const firstEl = videos[0]
  useEffect(()=>{
    getVideos()
  },[])

  return (
      <SafeAreaView>
        {(videos.length != 0)?
          <FlatList 
              ListHeaderComponent= {
                <MainScreenHeader id={firstEl.id} idYoutube={firstEl.idYoutube} urlPhoto={firstEl.urlPhoto}  navigation={props.navigation}/>
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
            /> :
        <ActivityIndicator size="large" color="#0000ff" />}
      </SafeAreaView>
    );
}

export default MoviesList;