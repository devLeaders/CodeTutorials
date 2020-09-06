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
  padding: 10,
});

interface FilterWithListProps {
  navigation: any,
  serachitem: string,
  searchedMovie: string,
  onSubmitSearch(): void;
}

export default class FilterWithList extends React.Component <FilterWithListProps, any>{
  constructor(props) {
    super(props);

    this.state = {
      movieList : false,
      searchedMovie: "Docker podstawy",
    };
  }

  showList = () => {this.setState({movieList: !this.state.movieList})};

render() {
  return ( 
    <Wrapper>
      <ShortcutToFilters 
        navigation={this.props.navigation}
        serachitem={this.state.searchedMovie}
        onSubmitSearch={() => this.props.navigation.navigate(NavigationName.HOME)}
        />
      <ListOfMovies 
        showsVerticalScrollIndicator={false}>
        <Text>Results</Text>
        <SlaiderNormal/>
      </ListOfMovies>
    </Wrapper>
  )};
};



