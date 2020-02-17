import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { IMAGES } from './ExampleData';
import { MoviesListExpandedType } from './MoviesType';
import {  
    ViewSeparator,
    ImageTherdSlaider,
    IcHeart,
    ItemLike,
    GroupCenter,
    ViewTitle,
  } from './MovieListStyle';

export class SlaiderSmall extends React.Component{
  constructor(props){
    super(props);
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListExpandedType) => (
    <View>
        <ImageTherdSlaider source={{uri: item.uri}}/>
        <GroupCenter>
            <IcHeart source={{uri:'ic_heart'}}/>
            <ItemLike>{item.like}</ItemLike>
          </GroupCenter>
          <GroupCenter>
            <ViewTitle>{item.title}</ViewTitle>
          </GroupCenter>
    </View>
  )

    render(){
        return(
            <FlatList 
              snapToAlignment={"start"}
              snapToInterval={DifrentSlaider.WIDTHSMALL + 10}
              decelerationRate={"fast"}
              ItemSeparatorComponent={this.Separator} 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={IMAGES} 
              renderItem={({item}) => this.ImgeSlaider(item)} 
              keyExtractor={ item => item.id }
          /> 
        )
    }
}