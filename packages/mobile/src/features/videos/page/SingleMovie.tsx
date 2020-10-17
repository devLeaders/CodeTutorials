import React from 'react';
import {ActivityIndicator, View } from 'react-native';
import {
  Background, Title,
} from '../components/SingleScreen/SingleMovieStyle2';
import  MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import MainDescription from '../components/SingleScreen/MainDescription';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '../../../features/common/styles/constans/Color';
import { NavigationHelpers } from '@react-navigation/native';
import { useVideo } from '../../../variables/VideoHook';

interface SingleMovieProps {
  navigation: NavigationHelpers<any>,
  route: any
}

const SingleMovie = (props:SingleMovieProps) => {  
  const id = props.route.params.itemId
  const { getVideo, video} = useVideo(id)
  const { navigation } = props;

    return (
      <>
      {(video != undefined)?
      <SafeAreaView style={{backgroundColor:Color.DARKGREY}}>
        <Background>
            <MainScreenHeader id={video.id} idYoutube={video.idYoutube} urlPhoto={video.urlPhoto}  navigation={navigation}/>  
            <MainDescription 
                title={video?.title}
                autor="Przemysław Bykowski"
                description={video?.description}
                navigation={navigation}
              />
            <Title>Podobne</Title>
              <View style={{justifyContent:'center',alignItems:'center', marginLeft:20}}>
                <SlaiderLarge  />
              </View>
        </Background>
     </SafeAreaView>
     : 
     <ActivityIndicator size="large" color="#0000ff" />}
      </>
    );
  }

  export default SingleMovie;