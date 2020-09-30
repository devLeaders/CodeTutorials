import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';
import { Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { getShadowStyle } from '../../../../features/common/styles/constans/ShadowStyle';

const Wrapper = styled.TouchableOpacity({
    marginTop: 10,
    marginLeft: 10,
    height: 168,
    width: 243,
    borderColor: Color.LIGHTGREYXX,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: Color.WHITE,
    ...getShadowStyle(2, Color.WHITEX,1),
});

const { width } = Dimensions.get("window");
export const ImageWidth = width -100;

const ImageButton = styled(Animated.Image)({
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: ImageWidth,
    height: 140, 
    resizeMode: 'cover', 
  
});

  const TextWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 38px;
  `;
  const TextButton = styled(MyText)`
    font-size: ${FontSize.SMALLS};
    font-weight: ${FontWeight.SEMIBOLD};
    text-align: left;
    color: ${Color.BLACK};
    margin-left: 11px;
`;

interface BigSquareOfMovieProps {
    text: string,
    image: string,
    style?: any,
    onPress:()=>void
  }

export default class BigSquareOfMovie extends React.Component<BigSquareOfMovieProps> {

    render(){
        return(
            <Wrapper style={{width:ImageWidth}} onPress={this.props.onPress}> 
                <TouchableOpacity>  
                <ImageButton style={this.props.style} source={{uri: this.props.image}}/>
                </TouchableOpacity>
                <TextWrapper>
                <TextButton>{this.props.text}</TextButton>
                </TextWrapper>
            </Wrapper>
        );
    }
}