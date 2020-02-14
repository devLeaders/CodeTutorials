import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { IMAGES } from './ExampleData';
import {  
    ViewSeparator,
    ImageTherdSlaider,
    IcHeart,
    ItemLike,
    GroupCenter,
    ViewTitle,
  } from './MovieListStyle';
export class SlaiderSmall extends React.Component{

    render(){
        return(
            <FlatList 
                snapToAlignment={"start"}
                snapToInterval={DifrentSlaider.WIDTHSMALL + 10}
                decelerationRate={"fast"}
                ItemSeparatorComponent={()=><ViewSeparator/>} 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={IMAGES} 
                renderItem={({item}) =>(
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
          )} 
            keyExtractor={ item => item.id }
          /> 
        )
    }
}