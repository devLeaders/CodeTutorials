import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { MyText } from '../../../common/styles/MyText';

const Wrapper = styled.TouchableOpacity`
    display: flex;
    margin-left: 16px;
`;

const ButtonFilter = styled.TouchableOpacity({
    minWidth: 80,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Color.LIGHTGREYX,
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

  const TextButton = styled(MyText)({
    minWidth: 80,
    fontSize: FontSize.SMALLXXS,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.WHITE,
  });
  

interface BlackFilterButtonInShorcutProps {
    navigation: any,
    text: string,
    goto: any,
  }
  
  //wybór white button | blackbutton

export default class BlackFilterButtonInShorcut extends React.Component<BlackFilterButtonInShorcutProps> {
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