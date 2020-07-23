import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import ShortcutToFilters from '../../videos/components/FiltersScreen/ShortcutToFilters';
import { NavigationName } from '../../../config/routing/NavigationName';
import { Color } from '../../../features/common/styles/constans/Color';
import { SlaiderNormal } from '../components/Movies/SlaiderNormal';

const Wrapper = styled.View({
  flex: 1,
});

const ListOfMovies = styled.ScrollView({
  flex: 3,
  backgroundColor: Color.WHITE,
});

interface FilterWithListProps {
  navigation: any,
  serachitem: string,
  onSubmitSearch(): void;
}

export default class FilterWithList extends React.Component <FilterWithListProps, any>{
  static navigationOptions = {
    headerShown: false,
};


render() {
  return ( 
    <Wrapper>
      <ShortcutToFilters 
        navigation={this.props.navigation}
        serachitem="Docker podstawy"
        onSubmitSearch={() => this.props.navigation.navigate(NavigationName.HOME)}
        />
      <ListOfMovies>
        <Text>List of Movies</Text>
        <SlaiderNormal></SlaiderNormal>
      </ListOfMovies>
    </Wrapper>
  )};
};



