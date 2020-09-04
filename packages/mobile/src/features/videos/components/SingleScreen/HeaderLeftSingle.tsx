import * as React from 'react';
import {BackButton, BackArrowImage} from './SingleMovieStyle2';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { useNavigation } from '@react-navigation/native';

const HeaderLeftSingle = () => {
  const navigation = useNavigation();
  const navToHome = () => navigation.goBack();

  return (
      <BackButton onPress={navToHome}>
        <BackArrowImage source={{uri: 'back_arrow'}} />
      </BackButton>
    );
}
export default HeaderLeftSingle