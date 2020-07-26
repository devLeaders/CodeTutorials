import * as React from 'react';
import { View, ScrollView, AsyncStorage, Image} from 'react-native';
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


export class  MoviesList extends React.Component{

  async componentDidMount() {
    const test = await getVideos();
  }
  
  render(){
    return (
      <View>
        <ScrollView>
          <ViewButtons>
            <ButtonFilter>
              <TextButtonActive>Nowości</TextButtonActive>  
            </ButtonFilter>
            <ButtonNOFilter>
              <TextButtonNOAct>Moja kolekcja</TextButtonNOAct>  
            </ButtonNOFilter>
            <ButtonNOFilter>
              <TextButtonNOAct>Popularne</TextButtonNOAct>  
            </ButtonNOFilter>
          </ViewButtons>
          <View>
            <SlaiderLarge/>
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
      </View>
    );
  }
}

export default MoviesList;