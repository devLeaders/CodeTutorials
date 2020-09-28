import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import {  
    ViewSeparator,
    ViewCentred,
} from './MovieListStyle';
import SmallSquareOfMovie from '../MainScreen/SmallSquareOfMovie';
import { NavigationName } from '../../../../config/routing/NavigationName';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/src/videos/models'
import  { ImageUtil } from './ImageUtils'

type SlaiderNormalS = {
    listVideos: Array<IVideosRespons>
  }
export class SlaiderNormal extends React.Component<any,SlaiderNormalS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public separator = () => (<ViewSeparator/>)
  public imgeSlaider = (item:IVideosRespons) => (
    <SmallSquareOfMovie 
    text= {item.title}
    navigation= {this.props.navigation}
    goto= {NavigationName.SINGLEMOVIE}
    image= {ImageUtil.getImageFromServer(item.urlPhoto)}
    />
  )
    

  async componentDidMount(){
    const listVideos = await AuthConnectors.getVideos({limit:4});
    this.setState ({
      listVideos:listVideos.data
    })
  }

  private renderIt = ({item}) => this.imgeSlaider(item)

  render(){
        return(
          <ViewCentred>
            <FlatList 
              snapToAlignment={"start"}
              snapToInterval={DifrentSlaider.WIDTHNORMAL + 10}
              decelerationRate={"fast"}
              ItemSeparatorComponent={this.separator} 
              showsHorizontalScrollIndicator={false}
              horizontal={false}
              data={this.state.listVideos} 
              renderItem={this.renderIt} 
              keyExtractor={ item => item.id.toString() }
              numColumns={2}
            /> 
          </ViewCentred>
        )
    }
}

