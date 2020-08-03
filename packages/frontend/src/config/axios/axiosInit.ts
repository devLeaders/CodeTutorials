import AxiosInstance from '@project/common/features/config/axios/configAxios';

export  function axiosInit() {
    AxiosInstance.defaults.baseURL =  process.env?.REACT_APP_API_URL;
    AxiosInstance.defaults.headers.Authorization =  `Bearer ${localStorage.getItem("token")}`;
};