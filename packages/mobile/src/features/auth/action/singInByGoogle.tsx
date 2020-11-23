import * as AuthConnectors from "@project/common/features/firebase-auth/connectors";
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import AsyncStorage from '@react-native-community/async-storage';
import { ErrorSingin } from '../components/SignIn/ErrorEnum';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';


export const singInByGoogle = async (
    callback:(error?:string)=>void,
) => {
  try {
        console.log('singin')
        // console.log(dataResponse)
        // const token = dataResponse.data.token;
        // AsyncStorage.setItem('token', token);
        // AxioiInstance.defaults.headers.Authorization = `Bearer ${token}`;
        await GoogleSignin.hasPlayServices();
        const idToken = await GoogleSignin.signIn();
        console.log(idToken)
        //  const dataResponse = await AuthConnectors.signInGoogle({
        //     idToken:idToken,
        // }as  string | any);
        
      callback()
    } catch (error) {
        console.log('singin-error')
        console.log(error)
        callback(getErrorMsg(error?.dataResponse));
    }
}

const getErrorMsg = (error)=>{
  switch(error.status){
    case 401:
      return ErrorSingin.LOGINERROR
    case 500:
      return ErrorSingin.NOCONNECT
    default:
      return ErrorSingin.APPERROR
  }
}
