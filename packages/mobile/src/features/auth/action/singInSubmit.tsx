import { NavigationName } from '../../../config/routing/NavigationName';
import * as AuthConnectors from '@project/common/features/auth/connectors'
import instance from '@project/common/features/config/axios/configAxios';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const loginSubmit = async (value: any, action: any, ) => {
  
    const dataResponse = await AuthConnectors.signIn({
        email: `${value.email}`,
        password: `${value.password}`,
    });
        const token = dataResponse.data.token;
        AsyncStorage.setItem('token', token);
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //    if(dataResponse.status == 201){
    //        navigation.navigate(NavigationName.MENU)
    //    }
       
}
export default loginSubmit;