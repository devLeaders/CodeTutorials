import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { 
  Hamburger, 
  FilterList, 
  Search, 
  Arrow, 
  ButtonFilter, 
  TextButtonActive,
  TextButtonNOAct,
  ViewButtons,
  ButtonNOFilter,
  ViewMargin,
  ViewSeparator,
  ViewGroupSlaider,
  ImageSlaider,
  SubTitleLeft,
  SubTitleRight,
  ImageSecondSlaider,
  ImageTherdSlaider,
  ViewTherdSlaider,
  GroupForSubtitle,
  GroupForDescription,
  IcHeart,
  ItemLike,
  GroupCenter,
  ViewTitle,
  ViewMarginSmall,
  ViewGroupUnderCategory
} from './MovieListStyle';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: 'movie1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    uri: 'movie2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    uri: 'movie3',
  }
];

const IMAGES = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
    uri: 'movie1',
    title: 'Ford v Ferrari',
    like: '97%'
  },
  {
    id: '3ac68afc-c605-48d3-fbd91aa97f632',
    uri: 'movie2',
    title: 'Sherlock Holms',
    like: '99%'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    uri: 'movie3',
    title: 'The Witcher',
    like: '90%'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    uri: 'movie4',
    title: 'Bad boys',
    like: '75%'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    uri: 'movie5',
    title: 'Frozen II',
    like: '80%'
  },
];

export class  MoviesList extends React.Component{
  static navigationOptions = ({ navigation }:any) => {
    return {
      headerStyle: {
        backgroundColor: '#f0f2fa',
      },
      headerTitle: () => 
        <FilterList>
          Movies in Bengaluru
          <Arrow source={{uri:"ic_arrow_down"}}/>
        </FilterList>,
      headerLeft: () => (
          <TouchableOpacity >
            <Hamburger source={{uri:'ic_menu'}}/>
          </TouchableOpacity> 
      ),
      headerRight: () => (
        <TouchableOpacity >
          <Search source={{uri:'ic_search'}}/>
        </TouchableOpacity> 
    ),
    };
  };
   
  render(){
    return (
      <View>
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
        <ViewMargin>
            <FlatList 
              snapToAlignment={"start"}
              snapToInterval={359 + 10}
              decelerationRate={"fast"}
              style={{marginTop: 27}}
              ItemSeparatorComponent={()=><ViewSeparator/>} 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA} 
              renderItem={({item}) =>(
                 <ViewGroupSlaider >
                    <ImageSlaider source={{uri: item.uri}}/>
                 </ViewGroupSlaider>
            )} 
              keyExtractor={ item => item.id }
            /> 
        </ViewMargin>
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
              <FlatList 
                snapToAlignment={"start"}
                snapToInterval={96 + 10}
                decelerationRate={"fast"}
                ItemSeparatorComponent={()=><ViewSeparator/>} 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={IMAGES} 
                renderItem={({item}) =>(
                  <View>
                      <ImageSecondSlaider source={{uri: item.uri}}/>
                        <GroupForDescription>
                            <IcHeart source={{uri:'ic_heart'}}/>
                            <ItemLike>{item.like}</ItemLike>
                          </GroupForDescription>
                          <GroupCenter>
                            <ViewTitle>{item.title}</ViewTitle>
                          </GroupCenter>
                  </View>
                )} 
                keyExtractor={ item => item.id }
              /> 
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
                <FlatList 
                  snapToAlignment={"start"}
                  snapToInterval={96 + 10}
                  decelerationRate={"fast"}
                  ItemSeparatorComponent={()=><ViewSeparator/>} 
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={IMAGES} 
                  renderItem={({item}) =>(
                    <ViewTherdSlaider >
                        <ImageTherdSlaider source={{uri: item.uri}}/>
                        <GroupCenter>
                            <Image source={{uri:'ic_heart'}} style={{ width: 6.1, height: 5.8, marginRight: 3}}/>
                            <ItemLike>{item.like}</ItemLike>
                          </GroupCenter>
                          <GroupCenter>
                            <ViewTitle>{item.title}</ViewTitle>
                          </GroupCenter>
                    </ViewTherdSlaider>
                )} 
                  keyExtractor={ item => item.id }
                /> 
             </View>
        </ViewMarginSmall>
      </View>
    );
  }
}

export default MoviesList;