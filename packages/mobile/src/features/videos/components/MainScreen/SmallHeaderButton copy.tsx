import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';
import BigHeaderButton from './BigHeaderButton';

const ButtonFilter = styled.TouchableOpacity({
    //marginRight: 10,
    height: 26,
    minWidth: 51,
    justifyContent: 'center',
  });

  const TextButton = styled(MyText)`
    font-size: ${FontSize.SMALLXS};
    font-weight: ${FontWeight.LIGHT};
    text-align: left;
    min-width: 26px;
`;

  const ImageButton = styled.Image`
    margin-left: 0px;
    height: 10px;
    width: 10px;
`;

export default class SmallHeaderButton2 extends BigHeaderButton {
    navi = (navigation) => {
        this.props.navigation.navigate(this.props.goto)
    
        }
    render(){
        return(
            <Wrapper>
                <ButtonFilter
                     onPress={this.navi} > 
                <ImageButton source={{uri: this.props.image}}/>       
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </Wrapper>
        );
    }
}