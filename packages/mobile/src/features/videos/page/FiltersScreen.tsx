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
              <ImageSerach source={{uri:'magnifier'}}/>
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
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
            <WhiteFilterButton 
              text="Graphic Design"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}/>
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <BlackFilterButton 
              text="Computer Science Engineer"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="UX/UI Design"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
            <WhiteFilterButton 
              text="Graphic Design"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
        </FilersButtonWrapper>
        <FilersButtonWrapper>
            <WhiteFilterButton 
              text="Dance"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
            <WhiteFilterButton 
              text="DJ"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
            <WhiteFilterButton 
              text="Guitarist"
              navigation={this.props.navigation}
              goto={NavigationName.HOME}
              />
        </FilersButtonWrapper>
        </SafeAreaView>
      </Wrapper>
      
    );
  }
}


