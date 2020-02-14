import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { IMAGES } from './ExampleData';
import {  
    ViewSeparator,
    ImageSecondSlaider,
    GroupForDescription,
    IcHeart,
    ItemLike,
    GroupCenter,
    ViewTitle,
  } from './MovieListStyle';
export class SlaiderNormal extends React.Component{

    render(){
        return(
            <FlatList 
            snapToAlignment={"start"}
            snapToInterval={DifrentSlaider.WIDTHNORMAL + 10}
            decelerationRate={"fast"}
            ItemSeparatorComponent={()=><ViewSeparator/>} 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={IMAGES} 
            renderItem={({item}) =>(
              <View>
                  <ImageSecondSlaider source={{uri: item.uri}}/>
                    <GroupForDescription>
                        <IcHeart source={{uri:'ic_heart'}}/>
                        <ItemLike>{item.like}</ItemLike>
                      </GroupForDescription>
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