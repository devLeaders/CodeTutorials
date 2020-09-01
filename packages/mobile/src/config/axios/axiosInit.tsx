import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

import AxiosInstance from '@project/common/features/config/axios/configAxios';
import Global from "../../features/common/models/Global";

export async function axiosInit() {
    AxiosInstance.defaults.baseURL =  Global.env.API_URL;
    AxiosInstance.defaults.headers.Authorization =  `Bearer ${await AsyncStorage.getItem("token")}`;

    AxiosInstance.interceptors.request.use((request)=> {
      console.log(request)
      return request;
    })
};

