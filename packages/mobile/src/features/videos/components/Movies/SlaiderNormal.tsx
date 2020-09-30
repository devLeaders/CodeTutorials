import * as React from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import {  
    ViewSeparator,
    ViewCentred,
} from './MovieListStyle';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/src/videos/models'
import { ImgeForNormalSlaider } from './ImageForNormalSlaider'

type SlaiderNormalS = {
    listVideos: Array<IVideosRespons>
  }

type SlaiderNormalP = {
    navigation: any
}

export class SlaiderNormal extends React.Component<SlaiderNormalP,SlaiderNormalS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public separator = () => (<ViewSeparator/>)
  public getListVideos = async() =>{
    const listVideos = await AuthConnectors.getVideos({limit:4});
    this.setState ({
      listVideos:listVideos.data
    })
  }

  componentDidMount(){
   this.getListVideos()
  }

  private renderIt = ({item}) => <ImgeForNormalSlaider item={item}/>

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

