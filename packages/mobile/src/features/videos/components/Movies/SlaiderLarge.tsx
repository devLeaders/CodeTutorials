import * as React from 'react';
import { View, FlatList ,Animated } from 'react-native';
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

 const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export class SlaiderLarge extends React.Component<any,SlaiderLargeS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  componentDidMount(){
    const listVideos =  GetVideosList();
    this.setState ({
      listVideos
    })
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListSimpleType, x:Animated.Value, index) => {
    const position = Animated.subtract(index * 200,x);
    const isDisappearing = -200;
    const isLeft = 0;
    const isRight = 200 - 100;
    const isAppearing = 200;
    const translateX = Animated.add(
      Animated.add(
        this.x,
        this.x.interpolate({
          inputRange: [0, index * 200],
          outputRange: [0, -index *200],
          extrapolateRight: 'clamp'
        })
      ),
        position.interpolate({
          inputRange: [isRight, isAppearing],
          outputRange: [0, -index * 200],
          extrapolateRight: 'clamp',
        }),
    );
    const scale = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
    })

    return(
      <Animated.View style={{ transform: [{translateX}]}}>
        <ImageSlaider source={{uri: item.uri}}/>
      </Animated.View>
    )
  }

  private renderIt = ({item, x, index}) => this.ImgeSlaider(item, x, index)
  x = new Animated.Value(0);
  onScroll = Animated.event(
    [{nativeEvent: 
      { contentOffset: { x: this.x} } } ], 
      { useNativeDriver: true, 
  });

    render(){
        return(
            <AnimatedFlatList 
                scrollEventThrottle={16}
                snapToAlignment={"start"}
                snapToInterval={DifrentSlaider.WIDTHLARGE + 10}
                decelerationRate={"fast"}
                style={{marginTop: 27}}
                ItemSeparatorComponent={this.Separator}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.listVideos} 
                renderItem={this.renderIt}
                keyExtractor={ item => item.id }
                {...{onScroll: this.onScroll}}
              /> 
        )
    }
}