import React from 'react';
import styled from 'styled-components/native';
import LogIn from '../components/SignIn/LogIn';
import SignInHeader from '../components/SignIn/SignInHeader';
import AnotherSingInMethods from '../components/SignIn/AnotherSingInMethods';
import {Color} from '../../common/styles/constans/Color';
import {FontSize} from '../../common/styles/constans/FontSize';
import { NavigationName } from '../../../config/routing/NavigationName';

const Wrapper = styled.ScrollView({
    flexDirection: 'column',
    flex: 1,  
    backgroundColor: Color.WHITE,
  
  });

const OrText = styled.Text`
    alignSelf: center;
    color: grey;
    `;

const SignUpText = styled.Text({
    marginTop: 10,
    marginBottom: 10, 
    color: Color.LIGHT_PURPLE,
    fontSize: FontSize.MIDPLUS,
    });

const SignUpOpacity = styled.TouchableOpacity({
    alignItems: 'center',
    });
      
export default class SignInScreen extends React.Component<any> {
    static navigationOptions = () => {
        return{
        headerShown: null,   
        }
    }

    render(){
        return(
            <Wrapper>
                <SignInHeader title={"Sign In"} />
                <LogIn navigation={this.props.navigation} />
                <SignUpOpacity onPress={() => this.props.navigation.navigate(NavigationName.SINGUP)}>
                    <SignUpText>Don't have an account?</SignUpText>
                </SignUpOpacity>
                <OrText>———OR———</OrText>
                <AnotherSingInMethods 
                    src1='facebook'
                    src2='google'
                    src3='twitter'
                /> 
            </Wrapper>
        )
    }
}


