import * as React from 'react';
import { View, FlatList ,Animated, Dimensions } from 'react-native';
import { DifrentSlaider, width } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ViewSeparator,
  ImageSlaider,
} from './MovieListStyle';
import { GetVideosList } from '../../action/conector';

 type SlaiderLargeS = {
  listVideos: Array<MoviesListSimpleType>
 }

export class SlaiderLarge extends React.Component<any,SlaiderLargeS>{
  x: Animated.Value;

  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.x = new Animated.Value(0);
  }

  componentDidMount(){
    const listVideos =  GetVideosList();
    this.setState ({
      listVideos
    })
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListSimpleType, index, x:Animated.Value) => {
    const { width } = Dimensions.get('window')
    const position = Animated.subtract(index * width,x);
    const isDisappearing = -width;
    const isLeft = 0;
    const isRight =  width;
    const isAppearing = width*2 ;
    const scale = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.5,1,1,0.5],
      extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
      inputRange: [isRight, isAppearing],
      outputRange: [0,0.5],
    })

    return(
      <Animated.View >
        <ImageSlaider style={{  transform: [{ scale }], margin:0, padding:0}} source={{uri: item.uri}}/>
      </Animated.View>
    )
  }

  private renderIt = ({item, index}) => this.ImgeSlaider(item, index, this.x)
  onScroll = (event) =>{
    console.log('param1',event.nativeEvent.contentOffset.x)
    
  }

//   onScroll = Animated.event(
//     [{nativeEvent: { contentOffset: { x: this.x} } } ], 
//     { useNativeDriver: true}
// );

    render(){
        return(
            <Animated.FlatList 
                scrollEventThrottle={1000}
                snapToAlignment={"start"}
                // snapToInterval={DifrentSlaider.WIDTHLARGE + 10}
                decelerationRate={"fast"}
                style={{marginTop: 27}}
                // ItemSeparatorComponent={this.Separator}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.listVideos} 
                renderItem={this.renderIt}
                keyExtractor={ item => item.id }
                bounces={ false }
                {...{onScroll: this.onScroll}}
                
              /> 
        )
    }
}