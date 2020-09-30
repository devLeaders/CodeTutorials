import React from 'react';
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

interface MovieListP {
  navigation: any
}

export const MoviesList = (props:MovieListP) =>{

  useCaseNotification(props.navigation)

  return (
      <SafeAreaView>
          <FlatList 
              ListHeaderComponent= {
                <MainScreenHeader navigation={props.navigation}/>
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