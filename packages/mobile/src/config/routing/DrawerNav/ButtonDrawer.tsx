import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../features/common/styles/constans/FontWeight';
import { FontSize } from '../../../features/common/styles/constans/FontSize';
import { Color } from '../../../features/common/styles/constans/Color';
import { NavigationName } from '../NavigationName';
import {TouchableOpacity, Image} from 'react-native';
import { MyText } from '../../../features/common/styles/MyText';
import { useNavigation } from '@react-navigation/native';

const Wrapper = styled.TouchableOpacity({
    flex: 1,
});

const ButtonDraw = styled.TouchableOpacity({
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 25,
    height: 37,
    width: 224,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYX,
    backgroundColor: Color.WHITE,
    shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "1",
    shadowRadius: 8,
    elevation: "3",
  });

  const TextButton = styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    color: Color.BLACK,
  });

  const IcDraw = styled.Image({
    width: 26,
    height: 26,
    marginRight: 9,
    marginLeft: 19
  });
  

interface ButtonDrawerP {
    text: string,
    goto: NavigationName,
    icon: string
}

export default function ButtonDrawer(props:ButtonDrawerP){
        const navigation = useNavigation()
        return(
        <Wrapper>
            <ButtonDraw
                onPress={() => navigation.navigate(props.goto)}>
            <IcDraw source={{uri: props.icon}}/>
            <TextButton>{ props.text}</TextButton>
            </ButtonDraw>
         </Wrapper>

    );
}