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
import { NavProps } from '../../../config/routing/ParamList';
import { NotyficationContext } from '../../../../NotificationsStore';

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

    console.log("dupa",state);
    if(state.type) {
      switch (state.type) {
        case 'newMovie' : 
          props.navigation.navigate(NavigationName.SINGLEMOVIE)
          break;
      }
    }

  },[state])
 
    const { navigation } = props;
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