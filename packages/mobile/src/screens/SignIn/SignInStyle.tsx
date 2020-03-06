import styled from 'styled-components/native';
import {FontSize} from '../../variables/FontSize';
import {FontWeight} from '../../variables/FontWeight';
import {FontFamily} from '../../variables/FontFamily';
import {Color} from '../../variables/Color';


export const Wrapper = styled.View({
  flex: 1,  
  backgroundColor: Color.WHITE,
  //alignItems: 'center',
  //justifyContent: 'center',
});

export const EmailView = styled.View({
  marginHorizontal: 20, 
  marginVertical: 5,
});

export const EmailText = styled.Text({
  marginBottom: 3, 
});

export const Header = styled.Text({ 
  color: Color.DARKGREY,
  fontSize: FontSize.MIDPLUS,
});

export const ForgotText = styled.Text({
  marginBottom: 10, 
  color: Color.LIGHT_PURPLE,
  fontSize: FontSize.MIDPLUS,
  marginRight: 10,
});

export const SignUpText = styled.Text({
  marginTop: 10,
  marginBottom: 10, 
  color: Color.LIGHT_PURPLE,
  fontSize: FontSize.MIDPLUS,

});


export const ForgotOpacity = styled.TouchableOpacity({
  alignItems: 'flex-end',
});

export const SignUpOpacity = styled.TouchableOpacity({
  alignItems: 'center',
})

const SignButton = styled.Button({
  color: Color.LIGHT_PURPLE,
})

/*const SignInButton = styled.Button({
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  backgroundColor: Color.LIGHT_PURPLE,
  radius: 40,
  width: 80%,
  marginTop: 15,
});
*/

const SingInButton2 = styled.TouchableOpacity`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: purple;
  border-radius: 40px;
  width: 80%;
  margin-top: 15px;
`;

  
