import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { NavigationName } from '../../../../config/routing/NavigationName';

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
    borderColor: Color.LIGHTGREYXX,
    //border: 1,  ??
    backgroundColor: Color.BLACK,
    shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "1",
    shadowRadius: 8,
    elevation: "3",
  });

  const TextButton = styled.Text`
    margin-right: 10px;
    margin-left: 10px;
    font-size: ${FontSize.MIDIUM};
    font-weight: ${FontWeight.REGULAR};
    font-family: ${FontFamily.GLOBAL_MONT};
    color: ${Color.WHITE};
    line-height: 24px;
`;
  

interface BlackFilterButtonProps {
    navigation: any,
    text: string,
    onSubmitFilter(): void,
    goto: any,
  }
  
  //wybór white button | blackbutton

export default class BlackFilterButton extends React.Component<BlackFilterButtonProps> {
    render(){
        return(
            <Wrapper>
                <ButtonFilter
                    onPress={() => this.props.navigation.navigate(this.props.goto)}>
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </Wrapper>

        );
    }
}