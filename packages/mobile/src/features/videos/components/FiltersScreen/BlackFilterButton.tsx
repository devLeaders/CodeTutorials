import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { MyText } from '../../../common/styles/MyText';
import { getShadowStyle } from '../../../../features/common/styles/constans/ShadowStyle';

const Wrapper = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    margin-top: 15px;
`;

const ButtonFilter = styled.TouchableOpacity({
    marginRight: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYX,
    backgroundColor: Color.BLACK,
    ...getShadowStyle(3, Color.LIGHTGREYX,1),
  });

  const TextButton = styled(MyText)({
    marginRight: 10,
    marginLeft: 10,
    fontSize: FontSize.MIDIUM,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.WHITE,
  });
  

interface BlackFilterButtonProps {
    onPress:()=>void,
    text: string,
  }
  
  //wybór white button | blackbutton

export default class BlackFilterButton extends React.Component<BlackFilterButtonProps> {
    render(){
        return(
            <Wrapper>
                <ButtonFilter
                    onPress={this.props.onPress}>
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </Wrapper>

        );
    }
}