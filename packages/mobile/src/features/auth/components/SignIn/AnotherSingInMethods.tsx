import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { singInByGoogle,  } from '../../action/singInByGoogle';
import { GoogleSignin } from '@react-native-community/google-signin';
import Global from "../../../common/models/Global";
import { NavigationName } from '../../../../config/routing/NavigationName';
import { NotyficationContext } from '../../../../features/notifications/NotificationsStore';


const Wrapper = styled.View`
`;

const ImageWrapper = styled.View`
  marginTop: 10px;
  flexDirection: row;
  justifyContent: space-around;
`;

const Img = styled.Image`
    width: 50px;
    height: 50px;
    border-color: red;
`;

const ButtonOpacity = styled.TouchableOpacity`
`;

interface AnotherSingInMethodsProps {
  src1: string;
  src2: string;
  src3: string;
  navigation: any;
}


const AnotherSingInMethods: React.FC<AnotherSingInMethodsProps> = props => {

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: "",
      offlineAccess: false
    });  
  
  }

  useEffect(() => {
    configureGoogleSign();
  }, []);
  
  const { state } = useContext(NotyficationContext)
  const [loading, setLoading] = useState(false);
  const [ serverError, setServerError ] = useState('')

  const onPressLogin = useCallback((value) => {
     setLoading(true)
     singInByGoogle(  (error)=>{
          setLoading(false)
          if(error){
              setServerError(error)
          }else {
              props.navigation.navigate(NavigationName.MENU)
          }
         
      })
  }, [])

 return (
    <Wrapper>
      <ImageWrapper>
        <ButtonOpacity>
          <Img source={{uri: props.src1}} />
        </ButtonOpacity>
        <ButtonOpacity 
          onPress={onPressLogin}
        >
          <Img source={{uri: props.src2}} />
        </ButtonOpacity>
        <ButtonOpacity>
          <Img source={{uri: props.src3}} />
        </ButtonOpacity>
      </ImageWrapper>
    </Wrapper>
);
}

export default AnotherSingInMethods;
