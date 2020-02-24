import React from 'react';
import {View, useEffect, useState, FlatList } from 'react-native';
//Images
import {
  ImageList,
  ImageItem,
  Separator,
  ViewImage,
} from './SingleMovieStyle2';
import { DATA } from './ExampleData';
import { getData } from './ExampleData';


export class SliderOfImage extends React.Component {

    render(){
          const [getData, setData] = useState(new Array());
            useEffect(() => {
              setData(getData());
          }, []);

        return (
            <View>
            <ImageList>
            <FlatList
              ItemSeparatorComponent={() => <Separator />}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <ViewImage>
                  <ImageItem source={{uri: item.uri}} />
                </ViewImage>
              )}
              keyExtractor={item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}