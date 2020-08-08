import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import { MyText } from '../styles/MyText';

const Title = styled(MyText)`
  font-size: 26px;
`;

export interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <View>
      <Title>{props.title}</Title>
    </View>
  );
};

export default Header;
