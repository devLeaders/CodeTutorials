import axios from "axios";
import {AsyncStorage} from 'react-native';

import AxiosInstance from '@project/common/features/config/axios/configAxios';

export async function axiosInit() {
    AxiosInstance.defaults.baseURL =  "http://localhost:3300";
    AxiosInstance.defaults.headers.Authorization =  `Bearer ${await AsyncStorage.getItem("token")}`;

    AxiosInstance.interceptors.request.use((request)=> {
      console.log(request)
      return request;
    })
};

