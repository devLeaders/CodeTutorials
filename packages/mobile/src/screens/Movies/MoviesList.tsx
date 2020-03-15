import * as React from 'react';
import { View, ScrollView, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from './HeaderTitle';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';
import { SlaiderLarge } from './SlaiderLarge';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {  
  ButtonFilter, 
  TextButtonActive,
  TextButtonNOAct,
  ViewButtons,
  ButtonNOFilter,
  ViewMargin,
  SubTitleLeft,
  SubTitleRight,
  GroupForSubtitle,
  ViewMarginSmall,
  ViewGroupUnderCategory
} from './MovieListStyle';
import { SlaiderNormal } from './SlaiderNormal';
import { SlaiderSmall } from './SlaiderSmall';
import Axios from './../../api/AxiosConfig';

export class  MoviesList extends React.Component{
  static navigationOptions = ({ navigation }:any) => {
    return {
      headerStyle: {
        backgroundColor: '#f0f2fa',
      },
      headerTitle: () => <HeaderTitle/>,
      headerLeft: () => <HeaderLeft/>,
      headerRight: () => <HeaderRight/>,
    };
  };
//do odzdzielnego componentu linie 39-43

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    const headers = {
      ...Axios.defaults.headers,
      'Authorization': `Bearer ${token}`
    };
    console.log("header: ", headers)
    console.log("token: ", token);

    const test = await Axios.get('/videos', {headers} )
    console.log("test: ", test);
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
                  <SubTitleLeft>Movies</SubTitleLeft>
                </TouchableOpacity>
                <TouchableOpacity>
                  <SubTitleRight>View All</SubTitleRight>
                </TouchableOpacity>
              </GroupForSubtitle>
              <View>
                <SlaiderNormal/>
              </View>
          </View>
          <ViewMarginSmall>
              <ViewGroupUnderCategory>
                  <TouchableOpacity>
                      <SubTitleLeft>Recommends</SubTitleLeft>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <SubTitleRight>View All</SubTitleRight>
                  </TouchableOpacity>
              </ViewGroupUnderCategory>
              <View>
                <SlaiderSmall/>
              </View>
          </ViewMarginSmall>
        </ScrollView>
      </View>
    );
  }
}

export default MoviesList;