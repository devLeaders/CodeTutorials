import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListExpandedType } from './MoviesType';
import {  
    ViewSeparator,
    ViewCentred,
} from './MovieListStyle';
import { GetVideosListExpandedV } from '../../action/conector';
import SmallSquareOfMovie from '../MainScreen/SmallSquareOfMovie';
import { NavigationName } from '../../../../config/routing/NavigationName';


type SlaiderNormalS = {
    listVideos: Array<MoviesListExpandedType>
  }
export class SlaiderNormal extends React.Component<any,SlaiderNormalS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public separator = () => (<ViewSeparator/>)
  public imgeSlaider = (item:MoviesListExpandedType) => (
    <SmallSquareOfMovie 
    text= {item.title}
    navigation= {this.props.navigation}
    goto= {NavigationName.SINGLEMOVIE}
    image= {item.uri}
    />
  )

  componentDidMount(){
    const listVideos =  GetVideosListExpandedV();
    this.setState ({
      listVideos
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
              keyExtractor={ item => item.id }
              numColumns={2}
            /> 
          </ViewCentred>
        )
    }
}