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
} from './SingleMovieStyle';

const DATA = [
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsAIA_fyXZtUCCy2_ZtuKQKSYNf4mJhnxn5tXojNVvELTCpGr-',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    uri: 'https://i.pinimg.com/originals/df/67/7f/df677fed943171dc7c75276544753586.jpg',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGAwxu1pY8sMoyT95ZsXBQS1hx4vTT59jf_t2oFPK14_oir47R',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsiLoYimfu2253MofOAYbbeFnJkcDOR4047PIld3tc5e3Q_ppL',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGAwxu1pY8sMoyT95ZsXBQS1hx4vTT59jf_t2oFPK14_oir47R',
  },
  {
    name: 'Joker',
    kind: 'Drama-comedy',
    runTime: '2h 2min',
    ratio: '95%',
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGAwxu1pY8sMoyT95ZsXBQS1hx4vTT59jf_t2oFPK14_oir47R',
  },
];

export default class SingleMovie extends React.Component {
  static navigationOptions = ({navigation}) => {
   return {
    headerShown: false,
  };
  };

  render() {
    const {navigation} = this.props;
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