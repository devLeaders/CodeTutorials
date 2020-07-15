import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../../features/common/styles/constans/FontWeight';
import { FontFamily } from '../../../../features/common/styles/constans/FontFamily';
import { FontSize } from '../../../../features/common/styles/constans/FontSize';
import { Color } from '../../../../features/common/styles/constans/Color';
import BlackFilterButtonInShorcut from './BlackFilterButtonInShorcut';
import { NavigationName } from '../../../../config/routing/NavigationName';
import XButton from './XButton';
import {MyText} from '../../../common/styles/MyText';
;

const Wrapper = styled.ScrollView({
  flexGrow: 1,
  backgroundColor: Color.WHITE,
  shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: "1",
    shadowRadius: 2,
    elevation: "5",
    flex: 1,
    flexDirection: 'column',
});

const TitleEyeAndXWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 8px;
`;

const TitleAndEyeWrapper = styled.View`
    display: flex;
    flex-direction: row;
`;

const SearchbarWrapper = styled.View({
  height: 30,
  //zmieniłem wysokośc bo zle wygladalo dodałem 3 px. // 
  //nie łapało alignitems: center; 
  width: 183,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 20,
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

const InputText = styled.TextInput`
  width: 138px;
  font-size: ${FontSize.SMALLXXS};
  line-height: 15px;
  margin-left: 13px;
  font-weight: ${FontWeight.REGULAR};
  font-family: ${FontFamily.GLOBAL_MONT};
  color: ${Color.BLACK};
`;

const SearchButton = styled.TouchableOpacity({
  backgroundColor: Color.WHITE,
  marginRight: 9.5,
});

const ImageSerach = styled.Image`
    height: 15px;
    width: 15px; 
`;

const EyeButton = styled.TouchableOpacity({
  marginLeft: 5,
  height: 30,
  width: 30,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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

const ImageEye = styled.Image`
    height: 14px;
    width: 17px;
`;

const ImageEyeBeforeClick = styled.Image`
    height: 14px;
    width: 17px;
    opacity: 0.2;
`;

const FilersButtonWrapper = styled.View`
    margin-right: 16px;
    flex-direction: row;
`;


interface ShortcutToFiltersProps {
  navigation: any,
  serachitem: string,
  onSubmitSearch(): void;
}

export default class ShortcutToFilters extends React.Component <ShortcutToFiltersProps, any>{
  constructor(props) {
    super(props);

    this.state = {
      showEye : false,
    };

    this.callFunc = this.callFunc.bind(this);
  }

  callFunc() {
    if (this.state.showEye) {
      this.setState({showEye:false});
    }else {
      this.setState({showEye: true});      
    }
  }

  static navigationOptions = {
    headerShown: false,
};

  render() {
    return (
      <Wrapper>
        <TitleEyeAndXWrapper>
           <TitleAndEyeWrapper>
              <SearchbarWrapper>
                <InputText 
                    autoCapitalize='none'
                    autoCorrect={false} 
                    placeholder="Docker od podstaw"
                    value={this.props.serachitem}
                    onChangeText={this.props.onSubmitSearch}                   
                    onEndEditing={this.props.onSubmitSearch}                        
                />
                <SearchButton>
                  <ImageSerach source={{uri:'magnifier'}}/>
                </SearchButton>  
              </SearchbarWrapper>   
              <EyeButton onPress={this.callFunc}>
                  {this.state.showEye === false && <ImageEyeBeforeClick source={{uri: 'eye'}} />}
                  {this.state.showEye && <ImageEye source={{uri: 'eye'}} /> }
              </EyeButton>
            </TitleAndEyeWrapper>   
            <XButton
                navigation={this.props.navigation}
                goto={NavigationName.HOME}/> 
        </TitleEyeAndXWrapper>

        <FilersButtonWrapper>
            <BlackFilterButtonInShorcut 
              text="Computer Science Engineer"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
        </FilersButtonWrapper>
      </Wrapper>
      
    );
  }
}


