import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Text, View } from 'react-native';
import {
  Background, Title,
} from '../components/SingleScreen/SingleMovieStyle2';
import  MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import MainDescription from '../components/SingleScreen/MainDescription';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '../../../features/common/styles/constans/Color';
import { NavigationHelpers, useFocusEffect } from '@react-navigation/native';
import HeaderLeftSingle from '../components/SingleScreen/HeaderLeftSingle';
import { IVideosRespons } from '@project/common/features/videos/models';
import * as AuthConnectors from '@project/common/features/videos/connector'


interface SingleMovieProps {
  navigation: NavigationHelpers<any>,
  route: any
}

const SingleMovie = (props:SingleMovieProps) => {
  const navigationOptions = {
        headerStyle: {
            backgroundColor: '#00000000',
        },
        headerTransparent: true,
        headerTitle: () => <View />,
        headerLeft: () => <HeaderLeftSingle/>,
  };
  const [ video, setVideo] = useState<IVideosRespons>()

  const id = props.route.params.itemId
  useFocusEffect(
    React.useCallback(() => {
      let isCancelled = false;
      (async ()=>{
        try{
          const req = await AuthConnectors.getVideo(id);
          if(!isCancelled){
            setVideo(req.data)
          }
        } catch (e) {
            console.log(e)
        }
      })();
      return () => {
        isCancelled = true;
      }
    }, [id])
  );



    const { navigation } = props;
    return (
      <>
      {(video != undefined)?
      <SafeAreaView style={{backgroundColor:Color.DARKGREY}}>
        <Background>
            <MainScreenHeader id={video?.id} idYoutube={video?.idYoutube} urlPhoto={video?.urlPhoto}  navigation={navigation}/>  
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