import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
//Images
import player from '../../assets/img/player.jpg';
import play from '../../assets/img/play.png';
import back_arrow from '../../assets/img/back_arrow.png';
import h from '../../assets/img/h.png';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
  Container,
  Player,
  PlayerImage,
  BackButton,
  BackArrowImage,
  ColumContainerLeft,
  ColumContainerRight,
  MovieName,
  MovieKind,
  RowContainer,
  Background,
  MovieTime,
  Owerview,
  Description,
  Heart,
  HeartRatio,
  RowContainerCenter,
} from './SingleMovieStyle'; 

const DATA = [
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: 'movie1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    uri: 'movie2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    uri: 'movie3',
  }
];

export default class SingleMOvie2 extends React.Component{
  static navigationOptions = {
    headerShown: false,
};


render(){
  return (
    <Background>
      <Container>
        <Player>
          <PlayerImage source={player}>

            <BackButton
              onPress={() => navigation.navigate('HomeScreen')}>
              <BackArrowImage source={back_arrow}></BackArrowImage>
            </BackButton>

          </PlayerImage>
        </Player>

        <View style={styles.imageList}>
          <Image style={styles.imageListItem} source={player} />
          <Image style={styles.imageListItem} source={player} />
          <Image style={styles.imageListItem} source={player} />
          <Image style={styles.imageListItem} source={player} />
        </View>
      </Container>

      <RowContainer>
        <ColumContainerLeft>
          <MovieName>
            {DATA[0].name}
          </MovieName>
          <MovieKind>
            {DATA[0].kind}
          </MovieKind>
          <MovieTime>
            Run Time: {DATA[0].runTime}
          </MovieTime>
          <Owerview>
            Overview
          </Owerview>
        </ColumContainerLeft>

        <RowContainerCenter>
          <Heart source={h}/>
          <HeartRatio>{DATA[0].ratio}</HeartRatio>
        </RowContainerCenter>

      </RowContainer>

      <ColumContainerLeft>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem ea, vel aspernatur molestias velit repellendus maxime suscipit laboriosam ab aliquid deserunt fugit ratione aperiam, quas, soluta magnam voluptatum possimus!
          </Description>
      </ColumContainerLeft>
        

    </Background>
  );
};
}

const styles = StyleSheet.create({

  description: {},
  footer: {},

  playerimage: {
    height: 250,
    width: 420,
  },
  imageList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 100,
  },
  imageListItem: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 4,
  },
 
  back_arrow: {
    padding: 5,
    height: 25,
    width: 25,
    marginTop: 20,
    marginLeft: 15,
    justifyContent: 'flex-start',
  },
});

