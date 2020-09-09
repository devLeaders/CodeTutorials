import { AxiosResponse, AxiosError } from "axios";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { Navigation } from "../routing/NavigationPath";
import { ServerStatus } from "./models";
export function axiosInit() {
  AxiosInstance.defaults.baseURL = process.env?.REACT_APP_API_URL;
  AxiosInstance.defaults.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
  AxiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === ServerStatus.UNAUTHORIZED && window.location.pathname !== Navigation.LOGIN) {
        sessionStorage.removeItem("token");
        return window.location.replace(Navigation.LOGIN);
      }
      return Promise.reject(error);
    }
  );
}
