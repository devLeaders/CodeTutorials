import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';

const Wrapper = styled.TouchableOpacity`
`;

const ButtonFilter = styled.TouchableOpacity({
    //marginRight: 10,
    height: 26,
    minWidth: 51,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYXX,
    //border: 1,  ??
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
    font-family: ${FontFamily.GLOBAL_MONT};
    color: ${Color.BLACK};
    justify-content: space-around;
`;

  const ImageButton = styled.Image`
    height: 10px;
    width: 10px;
     
`;
  

interface SmallHeaderButtonProps {
    navigation: any,
    text: string,
    image: string,
    //onSubmitFilter(): void,
  }
  
  //wybór white button | blackbutton

export default class SmallHeaderButton extends React.Component<SmallHeaderButtonProps> {
    render(){
        return(
            <Wrapper>
                <ButtonFilter
                    onPress={() => this.props.navigation.navigate(this.props.goto)}>
                <ImageButton source={{uri: this.props.image}}/>       
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </Wrapper>

        );
    }
}