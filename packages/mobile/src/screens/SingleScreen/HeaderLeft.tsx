import * as React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackButton, BackArrowImage} from './SingleMovieStyle2';
import player from '../../../assets/img/player.jpg';
import back_arrow from '../../../assets/img/back_arrow2.png';

interface Navi {
  navigation: any;
}

export class HeaderLeft extends React.Component<Navi> {
  render() {
    return (
      <BackButton onPress={() => this.props.navigation.navigate('Home')}>
        <BackArrowImage source={{uri: 'back_arrow2'}} />
      </BackButton>
    );
  }
}
