import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../common/styles/constans/Color';

const Wrapper = styled.TouchableOpacity({
    backgroundColor: Color.WHITE,
  });
  
  const ImageX = styled.Image`
      height: 30px;
      width: 30px; 
  `;
  

interface XButtonProps {
    navigation: any,
    goto: any,
  }

export default class XBuutton extends React.Component<XButtonProps> {
    render(){
        return(
            <Wrapper onPress={() => this.props.navigation.navigate(this.props.goto)}>
                <ImageX
                source={{uri:'x'}}
                />
            </Wrapper>

        );
    }
}