import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../../features/common/styles/constans/FontWeight';
import { FontFamily } from '../../../../features/common/styles/constans/FontFamily';
import { FontSize } from '../../../../features/common/styles/constans/FontSize';
import { Color } from '../../../../features/common/styles/constans/Color';
import BlackFilterButtonInShorcut from './BlackFilterButtonInShortcut';
import { NavigationName } from '../../../../config/routing/NavigationName';
import XButton from './XButton';
import { TextInput } from 'react-native';
import { getShadowStyle } from '../../../../features/common/styles/constans/ShadowStyle';

const Wrapper = styled.ScrollView({
  flexGrow: 1,
  backgroundColor: Color.WHITE,
  flex: 1,
  flexDirection: 'column',
});

const TitleEyeAndXWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px 16px 8px 16px;
`;

const TitleAndEyeWrapper = styled.View`
    display: flex;
    flex-direction: row;
`;

const SearchbarWrapper = styled.View({
  height: 30,
  width: 183,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 20,
  backgroundColor: Color.WHITE,
  ...getShadowStyle(3, Color.LIGHTGREYX,1),
});

const InputText = styled.TextInput`
  flex: 1,
  font-size: ${FontSize.SMALLXXS},
  margin-left: 13px,
  font-weight: ${FontWeight.REGULAR},
  font-family: ${FontFamily.GLOBAL_MONT},
  color: ${Color.BLACK},
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
  ...getShadowStyle(3, Color.LIGHTGREYX,1),
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
    display:flex;
    flex-wrap: wrap;
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
      eyeButton : false,
    };

  }

  showEye = () => this.setState({eyeButton: !this.state.eyeButton});

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
              <EyeButton onPress={this.showEye}>
                  {this.state.eyeButton === false && <ImageEyeBeforeClick source={{uri: 'eye'}} />}
                  {this.state.eyeButton && <ImageEye source={{uri: 'eye'}} /> }
              </EyeButton>
            </TitleAndEyeWrapper>   
            <XButton
                navigation={this.props.navigation}
                goto={NavigationName.HOME}/> 
        </TitleEyeAndXWrapper>

        <FilersButtonWrapper>
            <BlackFilterButtonInShorcut 
              text="Ux/UI Design"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
              <BlackFilterButtonInShorcut 
              text="Graphic Design"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
              <BlackFilterButtonInShorcut 
              text="Computer Science Engineer"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
              <BlackFilterButtonInShorcut 
              text="X"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
              <BlackFilterButtonInShorcut 
              text="ABCDEFGHIJK"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
        </FilersButtonWrapper>
      </Wrapper>
      
    );
  }
}


