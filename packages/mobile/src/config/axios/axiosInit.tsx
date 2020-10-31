import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

import AxiosInstance from '@project/common/features/config/axios/configAxios';
import Global from "../../features/common/models/Global";

export async function axiosInit() {
    AxiosInstance.defaults.baseURL =  Global.env.API_URL;
    AxiosInstance.interceptors.request.use((request)=> {
      return request;
    })
};

