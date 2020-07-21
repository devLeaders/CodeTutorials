import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { MoviesListExpandedType } from './MoviesType';
import {  
  ViewSeparator,
  ImageWidth
} from './MovieListStyle';
import { GetVideosListExpandedV } from '../../action/conector';
import BigSquareOfMovie from './BigSquareOfMovie'
import { NavigationName } from '../../../../config/routing/NavigationName';

 type SlaiderLargeS = {
  listVideos: Array<MoviesListExpandedType>
 }

export class SlaiderLarge extends React.Component<any,SlaiderLargeS>{
  x: Animated.Value;
  onScroll: ()=>void;
  renderIt: (item,index)=>void;
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.x = new Animated.Value(10);
    this.renderIt = ({item, index}) => this.ImgeSlaider(item, index, this.x);
    this.onScroll = Animated.event(
      [{nativeEvent: { contentOffset: { x: this.x} } } ], 
      { useNativeDriver: true}
  );
  }

  componentDidMount(){
    const listVideos =  GetVideosListExpandedV();
    this.setState ({
      listVideos
    })
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListExpandedType, index, x:Animated.Value) => {
    const { width } = Dimensions.get('window')
    const wCard = width -90 ;
    const position = Animated.subtract(index * wCard,x);
    const isDisappearing = -width;
    const isLeft = 0;
    const isRight =  width - 20;
    const isAppearing = width * 2;
    const scale = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.4,1,0.8,0.8],
      extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.4,1,0.3,0.5],
    })

    return(
      <Animated.View style={{ opacity, transform: [{ scale }]}}>
        <BigSquareOfMovie 
          text = {item.title}
          navigation = {this.props.navigation}
          goto = {NavigationName.SINGLEMOVIE}
          image = {item.uri}
        />
      </Animated.View>
    )
  }

    render(){
        return(
            <Animated.FlatList 
                scrollEventThrottle={10}
                snapToAlignment={"start"}
                snapToInterval={ImageWidth + 10}
                decelerationRate={"fast"}
                style={{marginTop: 27}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.listVideos} 
                renderItem={this.renderIt}
                keyExtractor={ item => item.id }
                bounces={ false }
                onScroll={ this.onScroll }
              /> 
        )
    }
}