import React from 'react';
import {FlatList} from 'react-native';
//Images
import player from '../../assets/img/player.jpg';
import back_arrow from '../../assets/img/back_arrow.png';
import h from '../../assets/img/h.png';
import play from '../../assets/img/play.png';
import {
  Container,
  Player,
  PlayerImage,
  BackButton,
  BackArrowImage,
  ColumContainerLeft,
  ColumContainerRight,
  ImageList,
  ImageItem,
  MovieName,
  MovieKind,
  RowContainer,
  Background,
  MovieTime,
  Owerview,
  Description,
  Heart,
  HeartRatio,
  RatioContainer,
  Separator,
  ViewImage,
  StarsContainer,
  Star,
  VoteText,
  PlayButton,
  Triangle,
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
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    uri: 'movie2',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    uri: 'movie3',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
    uri: 'movie1',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    uri: 'movie2',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    uri: 'movie3',
  },
];

export default class SingleMOvie2 extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Background>
        <Container>
          <Player>
            <PlayerImage source={player} />

            <PlayButton onPress={() => navigation.navigate('HomeScreen')}>
              <Triangle source={play} />
            </PlayButton>

          </Player>

          <BackButton onPress={() => navigation.navigate('HomeScreen')}>
            <BackArrowImage source={back_arrow} />
          </BackButton>

          

          <ImageList>
            <FlatList
              snapToAlignment={'start'}
              snapToInterval={359 + 10}
              decelerationRate={'fast'}
              style={{marginTop: 10}}
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
        </Container>

        <RowContainer>
          <ColumContainerLeft>
            <MovieName>{DATA[0].name}</MovieName>
            <MovieKind>{DATA[0].kind}</MovieKind>
            <MovieTime>Run Time: {DATA[0].runTime}</MovieTime>
            <Owerview>Overview</Owerview>
          </ColumContainerLeft>

          <ColumContainerRight>
            <RatioContainer>
              <Heart source={h} />
              <HeartRatio> {DATA[0].ratio}</HeartRatio>
            </RatioContainer>

            <StarsContainer>
              <VoteText>Vote: </VoteText>
              <Star source={h} />
              <Star source={h} />
              <Star source={h} />
              <Star source={h} />
              <Star source={h} />
            </StarsContainer>
          </ColumContainerRight>
        </RowContainer>

        <ColumContainerLeft>
          <Description>
            During the 1980s, a failed stand-up comedian is driven insane and
            turns to a life of crime and chaos in Gotham City while becoming an
            infamous psychopathic crime figure.
          </Description>
        </ColumContainerLeft>
      </Background>
    );
  }
}