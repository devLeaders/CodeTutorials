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

  const WrapperImageX = styled.TouchableOpacity({});

  const ImageX = styled.Image`
      background-color: black;
      height: 11px;
      width: 11px; 
  `;
  

interface BlackFilterButtonInShorcutProps {
    text: string,
  }
  
  //wybór white button | blackbutton

export default class BlackFilterButtonInShorcut extends React.Component<BlackFilterButtonInShorcutProps> {
    constructor(props) {
        super(props);
    
        this.state = {
          showX : true,
        };
    
        this.showFilter = this.showFilter.bind(this);
      }
    
      showFilter() {
        if (this.state.showX) {
          this.setState({showX:false});
        }else {
          this.setState({showX: true});      
        }
      }
    
      static navigationOptions = {
        headerShown: false,
    };


    render(){
        return(
            <Wrapper>
                {this.state.showX === true &&
                <ButtonFilter>
                <TextButton>{this.props.text}</TextButton>
                <WrapperImageX onPress={this.showFilter}>
                    <ImageX
                    source={{uri:'xsmall'}}
                    />
                </WrapperImageX>
                <Separator/>
                </ButtonFilter>
                }
            </Wrapper>

        );
    }
}