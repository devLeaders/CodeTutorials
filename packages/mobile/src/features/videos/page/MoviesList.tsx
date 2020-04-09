import * as React from 'react';
import { View, ScrollView, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/Movies/HeaderTitle';
import { HeaderLeft } from '../components/Movies/HeaderLeft';
import { HeaderRight } from '../components/Movies/HeaderRight';
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
  ViewMarginSmall,
  ViewGroupUnderCategory
} from '../components/Movies/MovieListStyle';
import { SlaiderNormal } from '../components/Movies/SlaiderNormal';
import { SlaiderSmall } from '../components/Movies/SlaiderSmall';
import Axios from '../../../config/axios/AxiosConfig';
import { NavigationName } from '../../../config/routing/NavigationName';
import { NavProps } from '../../../config/routing/ParamList';


export class  MoviesList extends React.Component{
  static navigationOptions = ({ 
    navigation,
    route 
  }: NavProps<NavigationName.MOVIELIST> ) => {
    return {
      headerStyle: {
        backgroundColor: '#f0f2fa',
      },
      headerTitle: () => <HeaderTitle/>,
      headerLeft: () => <HeaderLeft/>,
      headerRight: () => <HeaderRight/>,
    };
  };

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