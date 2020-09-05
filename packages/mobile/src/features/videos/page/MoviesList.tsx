import React, {useContext,useEffect} from 'react';
import { View, ScrollView, AsyncStorage, Image, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import {  
  ButtonFilter, 
  TextButtonActive,
  TextButtonNOAct,
  ViewButtons,
  ButtonNOFilter,
  SubTitleLeft,
  SubTitleRight,
  GroupForSubtitle,
  SmallArrow,
  ButtonContainer
} from '../components/Movies/MovieListStyle';
import { SlaiderNormal } from '../components/Movies/SlaiderNormal';
import {getVideos} from '@project/common/features/videos/connector';
import MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import { NavigationName } from '../../../config/routing/NavigationName';
import { NotyficationContext } from '../../notifications/NotificationsStore';
import { NotificatonType } from '../../../features/notifications/NotificationEnum';

interface MovieListP {
  navigation: any
}

export const MoviesList = (props:MovieListP) =>{

  const {state, dispatch} = useContext(NotyficationContext)
 
  useEffect(()=>{
    (async function(){
      const test = await getVideos();
    })()
  })

  useEffect(()=>{
    if(state.type) {
      switch (state.type) {
        case NotificatonType.NEW_VIDEO :
          props.navigation.navigate(NavigationName.SINGLEMOVIE,
            {movieId: state.data.id})
          break;
        case NotificatonType.NEW_PLAYLIST :
          props.navigation.navigate(NavigationName.MOVIELIST)
          break;
      }
    }
  },[state])

  return (
      <SafeAreaView>
        <ScrollView>
            <MainScreenHeader navigation={props.navigation}/>
          <View>
            <SlaiderLarge />
          </View>
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
                <SlaiderNormal/>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default MoviesList;