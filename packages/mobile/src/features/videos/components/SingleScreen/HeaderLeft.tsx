import * as React from 'react';
import {BackButton, BackArrowImage} from './SingleMovieStyle2';
import { NavigationName } from '../../../../config/routing/NavigationName';

interface Navi {
  navigation: any;
}

export class HeaderLeft extends React.Component<Navi> {

  public navToHome = () => this.props.navigation.navigate(NavigationName.HOME)

  render() {
    return (
      <BackButton onPress={this.navToHome}>
        <BackArrowImage source={{uri: 'back_arrow'}} />
      </BackButton>
    );
  }
}
