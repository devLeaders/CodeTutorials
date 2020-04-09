import React from 'react';
import {View } from 'react-native';
import {
  Container,
  Player,
  PlayerImage,
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
  RatioContainer,
  StarsContainer,
  Star,
  VoteText,
  PlayButton,
  Triangle,
} from '../components/SingleScreen/SingleMovieStyle2';
import {DATA} from '../action/ExampleData'
import {SliderOfImage} from '../components/SingleScreen/SliderOfImage';
import {HeaderLeft} from '../components/SingleScreen/HeaderLeft';
import { NavigationName } from '../../../config/routing/NavigationName';
import { NavProps } from '../../../config/routing/ParamList';

interface SingleMovie2Props {
  navigation: any
}

export default class SingleMovie2 extends React.Component <SingleMovie2Props>{
  static navigationOptions = ({ 
    navigation,
    route 
  }: NavProps<NavigationName.SINGLEMOVIE> ) => {
    return {
      headerStyle: {
        backgroundColor: '#00000000',
        paddingTop: 50,
      },
      headerTransparent: true,

      headerTitle: () => <View />,
      headerLeft: () => <HeaderLeft navigation={navigation} />,

    };
  };

  render() {
    return (
      <Background>
        <Container>
          <Player>
            <PlayerImage source={{uri:'ic_player'}} />
            <PlayButton onPress={() => this.props.navigation.navigate('Home')}>
              <Triangle source={{uri:'ic_play'}} />
            </PlayButton>
          </Player>
          <SliderOfImage />
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
              <Heart source={{uri:'ic_heart'}} />
              <HeartRatio> {DATA[0].ratio}</HeartRatio>
            </RatioContainer>

            <StarsContainer>
              <VoteText>Vote: </VoteText>
              <Star source={{uri:'ic_heart'}} />
              <Star source={{uri:'ic_heart'}} />
              <Star source={{uri:'ic_heart'}} />
              <Star source={{uri:'ic_heart'}} />
              <Star source={{uri:'ic_heart'}} />
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
