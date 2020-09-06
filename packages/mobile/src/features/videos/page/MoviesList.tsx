import * as React from 'react';
import { View, ScrollView, Image, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
import { NavigationHelpers } from '@react-navigation/native';

interface MovieListP {
  navigation: NavigationHelpers<any>
}

export class  MoviesList extends React.Component<MovieListP>{

  async componentDidMount() {
    const test = await getVideos();
  }
  
  render(){
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <ScrollView>
            <MainScreenHeader navigation={this.props.navigation}/>
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
}

export default MoviesList;