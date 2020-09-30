import * as AuthConnectors from '@project/common/features/auth/connectors'
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import AsyncStorage from '@react-native-community/async-storage';
import { ErrorSingin } from '../components/SignIn/ErrorEnum';

const loginSubmit = async (
  value: any,
  ftoken:string ,
  callback:(error?:string)=>void,
) => {
  try {
 
    const dataResponse = await AuthConnectors.signIn({
        email: value.email,
        password: value.password,
        firebaseToken: ftoken,
    });
    const token = dataResponse.data.token;
    AsyncStorage.setItem('token', token);
    AxioiInstance.defaults.headers.Authorization = `Bearer ${token}`;
    callback()
  } catch (error) {
    callback(getErrorMsg(error?.response));
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

export default loginSubmit;