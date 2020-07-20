import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ViewSeparator,
  ImageSlaider,
  ImageWidth
} from './MovieListStyle';
import { GetVideosList } from '../../action/conector';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { TouchableOpacity } from 'react-native-gesture-handler';

 type SlaiderLargeS = {
  listVideos: Array<MoviesListSimpleType>
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
    const listVideos =  GetVideosList();
    this.setState ({
      listVideos
    })
  }

  public navToSingleMovie = () => {this.props.navigation.navigate(NavigationName.SINGLEMOVIE)}

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListSimpleType, index, x:Animated.Value) => {
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
      <TouchableOpacity onPress={this.navToSingleMovie}>
        <Animated.View >
          <ImageSlaider style={{ opacity, transform: [{ scale }]}} source={{uri: item.uri}}/>
        </Animated.View>
      </TouchableOpacity>
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