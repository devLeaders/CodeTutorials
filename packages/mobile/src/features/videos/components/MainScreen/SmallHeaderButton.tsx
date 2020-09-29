import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';
import { NavigationName } from '../../../../config/routing/NavigationName';

const ButtonFilter = styled.TouchableOpacity({
    height: 26,
    minWidth: 51,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYXX,
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

  const TextButton = styled(MyText)`
    font-size: ${FontSize.SMALLXS};
    font-weight: ${FontWeight.LIGHT};
    text-align: left;
    min-width: 26px;
    color: ${Color.BLACK};
    justify-content: space-around;
`;

  const ImageButton = styled.Image`
    height: 10px;
    width: 10px;
     
`;

interface SmallHeaderButtonProps {
    onPress:()=>void,
    text: string,
    image: string,
  }


export default class SmallHeaderButton extends React.Component<SmallHeaderButtonProps> {
    render(){
        return(
            <TouchableOpacity>
                <ButtonFilter onPress={this.props.onPress}>
                <ImageButton source={{uri: this.props.image}}/>       
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </TouchableOpacity>

        );
    }
}