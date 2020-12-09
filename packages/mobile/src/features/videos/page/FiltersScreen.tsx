import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../common/styles/constans/FontWeight';
import { FontFamily } from '../../common/styles/constans/FontFamily';
import { FontSize } from '../../common/styles/constans/FontSize';
import { Color } from '../../common/styles/constans/Color';
import WhiteFilterButton from '../components/FiltersScreen/WhiteFilterButton';
import BlackFilterButton from '../components/FiltersScreen/BlackFilterButton';
import { NavigationName } from '../../../config/routing/NavigationName';
import XButton from '../components/FiltersScreen/XButton';
import {MyText} from '../../common/styles/MyText';
import { View, TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import { NavigationHelpers } from '@react-navigation/native';
import { getShadowStyle } from '../../../features/common/styles/constans/ShadowStyle';

interface FiltersScreenProps {
  navigation: NavigationHelpers<any>,
  serachitem: string,
  onSubmitSearch(): void;
}

export default class FiltersScreen extends React.Component <FiltersScreenProps, any>{
  constructor(props) {
    super(props);

    this.state = {
      isModalVisable : false,
    };

    this.callFunc = this.callFunc.bind(this);
  }

  callFunc() {
    if (this.state.isModalVisable) {
      this.setState({isModalVisable:false});
    }else {
      this.setState({isModalVisable: true});      
    }
  }

  static navigationOptions = {
    headerShown: false,
};

  onPressSearch = () => {
    this.props.navigation.navigate(NavigationName.FILTERWITHLIST);
  }

  navToHome = () => {
    this.props.navigation.navigate(NavigationName.HOME)
}

  render() {
    return ( 
      <Wrapper>
        <SafeAreaView>
        <TitleAndXWrapper>
            <Title>Szukaj</Title>
            <XButton
          navigation={this.props.navigation}
          goto={NavigationName.MENU}/> 
        </TitleAndXWrapper>
        <SearchbarWrapper>
            <InputText 
                autoCapitalize='none'
                autoCorrect={false} 
                placeholder="Wyszukaj"
                value={this.props.serachitem}
                onChangeText={this.props.onSubmitSearch}                   
                onEndEditing={this.props.onSubmitSearch}                         
            />
            <SearchButton onPress={this.onPressSearch}>
              <ImageSerach source={{uri:'ic_magnifier'}}/>
            </SearchButton>      
        </SearchbarWrapper>
        
        <EyeAndTextwrapper>
            <EyeButton onPress={this.callFunc}>
            {this.state.isModalVisable && <ImageEye source={{uri: 'eye'}} /> }
            </EyeButton>
            <TextEye>Pomiń "już oglądane"</TextEye>
        </EyeAndTextwrapper>
        <TextCategory>Kategorie</TextCategory>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="UX/UI Design"
              onPress={this.navToHome}
            />
            <WhiteFilterButton 
              text="Graphic Design"
              onPress={this.navToHome}
            />
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="Computer Science Engineer"
              onPress={this.navToHome}
            />
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="UX/UI Design"
              onPress={this.navToHome}
            />
            <WhiteFilterButton 
              text="Graphic Design"
              onPress={this.navToHome}
            />
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="Dance"
              onPress={this.navToHome}
            />
            <WhiteFilterButton 
              text="DJ"
              onPress={this.navToHome}
            />
            <WhiteFilterButton 
              text="Guitarist"
              onPress={this.navToHome}
            />
        </FilersButtonWrapper>
        </SafeAreaView>
      </Wrapper>
      
    );
  }
}

const Wrapper = styled.ScrollView({
  flexGrow: 1,
  backgroundColor: Color.WHITE,
  ...getShadowStyle(5, Color.LIGHTGREYX,1),
  flex: 1,
  flexDirection: 'column',
});

const TitleAndXWrapper = styled.View`
    margin-top: 14px;
    margin-right: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled(MyText)`
    margin-left: 15px;
    font-weight: ${FontWeight.BOLD};
    font-size: ${FontSize.BIG};
    color: ${Color.BLACK};
    line-height: 28px;
`;

const SearchbarWrapper = styled.View({
  marginTop: 26,
  height: 50,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 16,
  marginRight: 22,
  borderRadius: 20,
  backgroundColor: Color.WHITE,
  ...getShadowStyle(3, Color.LIGHTGREYX,1),
});

const InputText = styled.TextInput`
  width: 200px;
  font-size: ${FontSize.MIDIUM};
  line-height: 19px;
  margin-left: 24px;
  font-weight: ${FontWeight.REGULAR};
  font-family: ${FontFamily.GLOBAL_MONT};
  color: ${Color.BLACK};
`;

const SearchButton = styled.TouchableOpacity({
  backgroundColor: Color.WHITE,
  marginRight: 18,
});

const ImageSerach = styled.Image`
    height: 24px;
    width: 24px; 
`;

const EyeAndTextwrapper = styled.View`
    margin-top: 27px;
    margin-right: 16px;
    margin-left: 21px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EyeButton = styled.TouchableOpacity({
  height: 50,
  width: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  borderColor: Color.LIGHTGREYX,
  backgroundColor: Color.WHITE,
  ...getShadowStyle(3, Color.LIGHTGREYX,1),
});

const ImageEye = styled.Image`
    height: 20px;
    width: 20px;
`;

const TextEye = styled(MyText)`
    font-size: ${FontSize.GRANDEMIDIUM};
    line-height: 27px;
    margin-left: 14px;
    font-weight: ${FontWeight.SEMIBOLD};
    color: ${Color.BLACK};
`;

const TextCategory = styled(MyText)`
    margin-top: 35px;
    margin-left: 21px;
    font-size: ${FontSize.GRANDEMIDIUM};
    font-weight: ${FontWeight.SEMIBOLD};
    color: ${Color.BLACK};
    line-height: 27px;
    margin-bottom: 20px;  
`;

const FilersButtonWrapper = styled.View`
    margin-left: 21px;
    margin-right: 10px;
    flex-direction: row;
`;
