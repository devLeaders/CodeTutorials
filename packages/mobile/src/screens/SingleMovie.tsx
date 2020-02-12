import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
//Images
import player from '../../assets/img/player.jpg';
import play from '../../assets/img/play.png';
import back_arrow from '../../assets/img/back_arrow.png';
import {
  Container,
  Player,
  PlayerImage,
  PlayButton,
  BackButton,
} from './SingleMovieStyle';

export default class SingleMOvie2 extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Player>
            <PlayerImage source={player}>
              <PlayButton onPress={() => navigation.navigate('HomeScreen')}>
                <Image style={styles.triangle} source={back_arrow} />
              </PlayButton>
            </PlayerImage>
          </Player>

          <BackButton onPress={() => navigation.navigate('HomeScreen')}>
            <Image style={styles.triangle} source={play} />
          </BackButton>

          <View style={styles.imageList}>
            <Image style={styles.imageListItem} source={player} />
            <Image style={styles.imageListItem} source={player} />
            <Image style={styles.imageListItem} source={player} />
            <Image style={styles.imageListItem} source={player} />
          </View>
          <View style={styles.description}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar sic
              tempor. Sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien
              nunc accuan eget.
            </Text>
          </View>

          <View style={styles.footer}>
            <Text>Footer1</Text>
            <Text>Footer1</Text>
            <Text>Footer1</Text>
            <Text>Footer1</Text>
            <Text>Footer1</Text>
          </View>
        </Container>
      </ScrollView>
    );
  }
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

  triangle: {
    padding: 5,
    height: 45,
    width: 45, //The Width must be the same as the height
    borderRadius: 90, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignSelf: 'center',
  },
});
