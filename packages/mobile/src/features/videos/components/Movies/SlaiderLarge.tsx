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
import { AnimationSlaider } from './AnimationSlaider';

 type SlaiderLargeS = {
  listVideos: Array<MoviesListSimpleType>
 }

 type SlaiderLargeP = {
   navigation: any
 }

export class SlaiderLarge extends React.Component<SlaiderLargeP,SlaiderLargeS>{
  x: Animated.Value;
  onScroll: ()=>void;
  renderIt: (item,index)=>void;
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.x = new Animated.Value(10);
    this.renderIt = ({item, index}) => <AnimationSlaider item={item} index={index} x={this.x} navigation={this.props.navigation} />;
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

  public Separator = () => (<ViewSeparator/>)

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