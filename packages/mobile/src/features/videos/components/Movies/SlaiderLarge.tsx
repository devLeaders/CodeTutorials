import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import {  
  ViewSeparator,
  ImageWidth
} from './MovieListStyle';
import { AnimationSlaider } from './AnimationSlaider';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/src/videos/models'

 type SlaiderLargeS = {
  listVideos: Array<IVideosRespons>
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
    this.renderIt = ({item, index}) => <AnimationSlaider item={item} index={index} x={this.x} />;
    this.onScroll = Animated.event(
      [{nativeEvent: { contentOffset: { x: this.x} } } ], 
      { useNativeDriver: true}
    );
  }

  public getVideosList =async() =>{
    const listVideos = await AuthConnectors.getVideos({limit:8});;
    this.setState ({
      listVideos: listVideos.data
    })
  }

  componentDidMount(){
    this.getVideosList()
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
                keyExtractor={ item => item.id.toString() }
                bounces={ false }
                onScroll={ this.onScroll }
              /> 
        )
    }
}