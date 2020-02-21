import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.view1}>
        <Text>Details Screen</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Stay in Details"
            onPress={() => navigation.navigate('Details')}
        />
        <Button
            title="Go to Netflix News"
            onPress={() => navigation.navigate('AxiosExample')}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
});

export default DetailsScreen;