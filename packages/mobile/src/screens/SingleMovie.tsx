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
} from 'react-native';

//style do pliku const

const SingleMovie = () => {
  return (
    <ScrollView>
        <View style={styles.container}>

      <View style={styles.header}>
        <Text>Searchbar - Header</Text>
      </View>
      <View style={styles.player}>
        <Text>Player</Text>
      </View>
      <View style={styles.imagelist}>
        <Text>List of pictures</Text>
        <Text>List of pictures</Text>
        <Text>List of pictures</Text>
        <Text>List of pictures</Text>
      </View>
      <View style={styles.description}>
        <Text>Description</Text>
      </View>
      <View style={styles.footer}>
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
  player: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imagelist: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  description: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  footer: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default SingleMovie;
