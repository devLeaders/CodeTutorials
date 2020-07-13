import React from 'react';
import styled from 'styled-components';
import {ScrollView} from 'react-native';
import SmallHeaderButton from './SmallHeaderButton';
import { NavigationName } from '../../../../config/routing/NavigationName';
import BigHeaderButton from './BigHeaderButton';


const ButtonsWraper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -13px;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 210px;
`;

interface MainScreenHeaderProps {
  navigation: any,
}

export default class MainScreenHeader extends React.Component <MainScreenHeaderProps, any>{
  static navigationOptions = {
    headerShown: false,
};

  render() {
    return (
      <ScrollView>
        <HeaderImage source={{uri:'mainheader'}}/>
        <ButtonsWraper>
          <SmallHeaderButton 
                text="PlayLista"
                navigation={this.props.navigation}
                goto={NavigationName.HOME}
                image="plus"
          />
          <BigHeaderButton 
                text="Odtwórz"
                navigation={this.props.navigation}
                goto={NavigationName.HOME}
                image="play"
          />
          <SmallHeaderButton 
                text="Informacje"
                navigation={this.props.navigation}
                goto={NavigationName.HOME}
                image="info"
          />
        </ButtonsWraper>
      </ScrollView>
      
    );
  }
}


