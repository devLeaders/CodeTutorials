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
import Axios from '../../../config/axios/AxiosConfig';
import MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MoviesListP {
  navigation: any
}

export class  MoviesList extends React.Component<MoviesListP>{

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    const headers = {
      ...Axios.defaults.headers,
      'Authorization': `Bearer ${token}`
    };
    const test = await Axios.get('/videos', {headers} )
  }
  
  render(){
    return (
      <SafeAreaView>
        <ScrollView>
            <MainScreenHeader navigation={this.props.navigation}/>
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
      </SafeAreaView>
    );
  }
}

export default MoviesList;