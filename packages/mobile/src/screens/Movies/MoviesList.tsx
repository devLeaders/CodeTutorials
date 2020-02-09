import * as React from 'react';
import { View, Image} from 'react-native';
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
  ButtonNOFilter
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
        <View style={{marginTop: 27}}>
            <FlatList 
              snapToAlignment={"start"}
              snapToInterval={359 + 10}
              decelerationRate={"fast"}
              style={{marginTop: 27}}
              ItemSeparatorComponent={()=><View style={{width:20}}/>} 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA} 
              renderItem={({item}) =>(
                 <View style={{height:136, width:359}}>
                 <Image source={{uri: item.uri}} style={{width:359, height:136 , resizeMode: 'cover', borderRadius: 10}}/>
               </View>
            )} 
              keyExtractor={ item => item.id }
            /> 
        </View>
      </View>

    );
  }
}

export default MoviesList;