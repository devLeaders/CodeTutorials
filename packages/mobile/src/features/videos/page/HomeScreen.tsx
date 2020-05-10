/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationName } from '../../../config/routing/NavigationName';
import styled from 'styled-components';

const HemeButton = styled.Button`
  padding: 2px;
`;

declare var global: {HermesInternal: null | {}};

const HomeScreen = ({navigation}:any) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
             {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text>Buttons to Exaples</Text>
                <HemeButton
                    color="#e63900"
                    title="Go to SingleMovie after CR"
                    onPress={() => navigation.navigate(NavigationName.SINGLEMOVIE)}
                />
                 <HemeButton
                    color="#e63900"
                    title="Go to MovieList"
                    onPress={() => navigation.navigate(NavigationName.MOVIELIST)}
                />
                <HemeButton
                    color="#e63900"
                    title="Go to SignIn"
                    onPress={() => navigation.navigate(NavigationName.SIGNINSCREEN)}
                />
                  <HemeButton
                    color="#e63900"
                    title="Go to SignUp"
                    onPress={() => navigation.navigate(NavigationName.SINGUP)}
                />
                <HemeButton
                    color="#e63900"
                    title="Go to SINGLEMOVIEDESCRIPTION"
                    onPress={() => navigation.navigate(NavigationName.SINGLEMOVIEDESCRIPTION)}
                />

                <HemeButton
                    color="#e63900"
                    title="FiltersScreen"
                    onPress={() => navigation.navigate(NavigationName.FILTERSSCREEN)}
                />
                <HemeButton
                    color="#e63900"
                    title="MainScreenHeader"
                    onPress={() => navigation.navigate(NavigationName.MAINSCREENHEADER)}
                />
                <HemeButton
                    color="#e63900"
                    title="SquareOfMovie"
                    onPress={() => navigation.navigate(NavigationName.SQUAREOFMOVIE)}
                />






              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;
