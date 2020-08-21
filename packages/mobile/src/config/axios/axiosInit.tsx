import axios from "axios";
import {AsyncStorage} from 'react-native';

import AxiosInstance from '@project/common/features/config/axios/configAxios';

export async function axiosInit() {
    AxiosInstance.defaults.baseURL =  "http://localhost:3300";
    const token = await AsyncStorage.getItem("token");
    if(token){
      AxiosInstance.defaults.headers.Authorization =  `Bearer ${token}`;
    }
    AxiosInstance.interceptors.request.use((request)=> {
      // console.log(request)
      return request;
    })
};

