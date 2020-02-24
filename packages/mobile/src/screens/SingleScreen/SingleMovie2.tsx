import React from 'react';
import {FlatList} from 'react-native';
//Images
import player from '../../../assets/img/player.jpg';
import back_arrow from '../../../assets/img/back_arrow2.png';
import h from '../../../assets/img/h.png';
import play from '../../../assets/img/play_brown.png';
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
} from './SingleMovieStyle2';
import { DATA, IMAGES } from './ExampleData';
import SliderOfImage from './SliderOfImage';
import HeaderLeft from './HeaderLeft';

export default class SingleMovie2 extends React.Component {
  static navigationOptions = ({navigation}) => {
   return {
    headerShown: true,
  };
  };

  render() {
    
    return (
      <Background>
        <Container>
          <Player>
            <PlayerImage source={player} />
            <PlayButton onPress={() => this.props.navigation.navigate('Home')}>
            <Triangle source={play} />
          </PlayButton>
          
          </Player>
          
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

         

        </Container>

        <BackButton onPress={() => this.props.navigation.navigate('Home')}>
          <BackArrowImage source={back_arrow} />
        </BackButton>

        

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