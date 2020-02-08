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
} from 'react-native';
import player from '../../assets/img/player.jpg';

//style do pliku const

const SingleMovie = () => {
  return (
    <ScrollView>
        <View style={styles.container}>

      <View style={styles.header}>
        <Text>Searchbar - Header</Text>
      </View>
      <View style={styles.player}>
        <Image style={styles.playerimage} source={player} />
      </View>
      <Button
        style={styles.playbutton}
        title='PLAY'
        onPress={()=>{console.log('PLAYbutton')}}
        
      />
      <View style={styles.imageList}>
      <Image style={styles.imageListItem} source={player} />
      <Image style={styles.imageListItem} source={player} />
      <Image style={styles.imageListItem} source={player} />
      <Image style={styles.imageListItem} source={player} />
      </View>

      <View style={styles.description}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer1</Text>
        <Text>Footer1</Text>
        <Text>Footer1</Text>
        <Text>Footer1</Text>
        <Text>Footer1</Text>

      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
  },
  description: {
  },
  footer: {
  },
  player: {
  },
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
  playbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:50,
  }
});

export default SingleMovie;
