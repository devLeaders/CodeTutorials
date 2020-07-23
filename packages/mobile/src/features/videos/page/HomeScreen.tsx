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
import styled from 'styled-components/native';
import { NavProps } from '../../../config/routing/ParamList';

const HomeButton = styled.Button`
  padding: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

declare var global: {HermesInternal: null | {}};

export const HomeScreen = ({ navigation }: NavProps<NavigationName.HOME>) => { 
  
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
                <HomeButton
                    color="#e63900"
                    title="Go to SingleMovie"
                    onPress={() => navigation.navigate(NavigationName.SINGLEMOVIE)}
                />
                 <HomeButton
                    color="#e63900"
                    title="Go to MovieList"
                    onPress={() => navigation.navigate(NavigationName.MOVIELIST)}
                />
                <HomeButton
                    color="#e63900"
                    title="Go to SignIn"
                    onPress={() => navigation.navigate(NavigationName.SIGNINSCREEN)}
                />
                  <HomeButton
                    color="#e63900"
                    title="Go to SignUp"
                    onPress={() => navigation.navigate(NavigationName.SINGUP)}
                />
                <HomeButton
                    color="#e63900"
                    title="Go to SINGLEMOVIEDESCRIPTION"
                    onPress={() => navigation.navigate(NavigationName.SINGLEMOVIEDESCRIPTION)}
                />

                <HomeButton
                    color="#e63900"
                    title="FiltersScreen"
                    onPress={() => navigation.navigate(NavigationName.FILTERSSCREEN)}
                />
                <HomeButton
                    color="#e63900"
                    title="MainScreenHeader"
                    onPress={() => navigation.navigate(NavigationName.MAINSCREENHEADER)}
                />
                <HomeButton
                    color="#e63900"
                    title="SquareOfMovie"
                    onPress={() => navigation.navigate(NavigationName.SQUAREOFMOVIE)}
                />
                <HomeButton
                    color="#e63900"
                    title="ShortcutToFilters"
                    onPress={() => navigation.navigate(NavigationName.SHORTCUTTOFILTERS)}
                />
                <HomeButton
                    color="#e63900"
                    title="FILTERWITH"
                    onPress={() => navigation.navigate(NavigationName.FILTERWITHLIST)}
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
