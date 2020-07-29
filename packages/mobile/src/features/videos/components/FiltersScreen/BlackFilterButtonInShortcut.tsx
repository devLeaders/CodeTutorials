import React from 'react';
import {TouchableOpacity} from 'react-native';
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
    margin-bottom: 7px;
`;

const ButtonFilter = styled.TouchableOpacity({
    minWidth: 50,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 3,
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
    marginLeft: 5,
    marginRight: 10,
    minWidth: 30,
    fontSize: FontSize.SMALLXXS,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.WHITE,
  });

  const Separator = styled.View({
    marginRight: 5,
  });

  const ImageX = styled.Image`
      background-color: black;
      height: 11px;
      width: 11px; 
  `;
  

interface BlackFilterButtonInShorcutProps {
    text: string,
    navigation: any,
    goto: any
  }
  interface BlackFilterButtonInShorcutState {
    blackButton: boolean
  }
  
  //wybór white button | blackbutton

export default class BlackFilterButtonInShortcut extends React.Component<BlackFilterButtonInShorcutProps,BlackFilterButtonInShorcutState> {
    constructor(props) {
        super(props);
    
        this.state = {
          blackButton : true,
        };
    
        this.showBlackFilterButton = this.showBlackFilterButton.bind(this);
      }
    
      showBlackFilterButton() {
        if (this.state.blackButton) {
          this.setState({blackButton:false});
        }else {
          this.setState({blackButton: true});      
        }
      }
    
      static navigationOptions = {
        headerShown: false,
    };


    render(){
        return(
            <Wrapper>
                {this.state.blackButton &&
                <ButtonFilter>
                <TextButton>{this.props.text}</TextButton>
                <TouchableOpacity onPress={this.showBlackFilterButton}>
                    <ImageX
                    source={{uri:'xsmall'}}
                    />
                </TouchableOpacity>
                <Separator/>
                </ButtonFilter>
                }
            </Wrapper>

        );
    }
}