import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';

const ButtonFilter = styled.TouchableOpacity({
    height: 30,
    minWidth: 96,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
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

  const TextButton = styled(MyText)`
    font-size: ${FontSize.SMALLXX};
    font-weight: ${FontWeight.SEMIBOLD};
    text-align: left;
    min-width: 49px;
    color: ${Color.BLACK};
    justify-content: space-around;
    margin-right: 10px;
`;

  const ImageButton = styled.Image`
    margin-left: 9px;
    height: 19px;
    width: 19px;
`;

interface BigHeaderButtonProps {
    navigation: any,
    text: string,
    image: string,
    goto: any,
  }

export default class BigHeaderButton extends React.Component<BigHeaderButtonProps> {
    navi = (navigation) => {
    this.props.navigation.navigate(this.props.goto)

    }
    render(){
        return(
            <TouchableOpacity>
                <ButtonFilter
                    onPress={this.navi} > 
                <ImageButton source={{uri: this.props.image}}/>       
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </TouchableOpacity>

        );
    }
}