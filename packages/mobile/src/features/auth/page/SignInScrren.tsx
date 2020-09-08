import React from 'react';
import styled from 'styled-components/native';
import LogIn from '../components/SignIn/LogIn';
import SignInHeader from '../components/SignIn/SignInHeader';
import AnotherSingInMethods from '../components/SignIn/AnotherSingInMethods';
import {Color} from '../../common/styles/constans/Color';
import {FontSize} from '../../common/styles/constans/FontSize';
import { NavigationName } from '../../../config/routing/NavigationName';
import { MyText } from '../../../features/common/styles/MyText';
import { ScrollView, View } from 'react-native';
import Header from '../../../features/common/components/Header';
import GoogleAuth from '../components/SignIn/GoogleAuth/GoogleAuth';

const Wrapper = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Color.WHITE,
  
  });

const OrText = styled.Text`
    alignSelf: center;
    color: grey;
    `;

const SignUpText = styled(MyText)({
    marginTop: 10,
    marginBottom: 10, 
    color: Color.DARKGREYX,
    fontSize: FontSize.MIDPLUS,
    });

const Section = styled.View`
    width: 80%;
`;

const SignUpOpacity = styled.TouchableOpacity({
    alignItems: 'center',
    });
      
class SignInScreen extends React.Component<any> {
    
    public navToSingUp = () => this.props.navigation.navigate(NavigationName.SINGUP)

    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <Wrapper>
                    <Section >
                        <Header title="Zaloguj się"></Header>
                    </Section>
                    <LogIn navigation={this.props.navigation} />
                    <SignUpOpacity onPress={this.navToSingUp}>
                        <SignUpText>Nie masz konta?</SignUpText>
                    </SignUpOpacity>
                    <OrText>———LUB———</OrText>
                    <AnotherSingInMethods 
                        src1='facebook'
                        src2='google'
                        src3='twitter'
                    /> 
                    <GoogleAuth />
                </Wrapper>
            </ScrollView>
        )
    }
}

export default SignInScreen 
