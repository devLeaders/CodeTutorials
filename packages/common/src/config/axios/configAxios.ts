import axios, { AxiosResponse, AxiosError } from "axios";
import { Routes } from "../routes";
const instance = axios.create({
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname !== Routes.LOGIN
    ) {
      sessionStorage.removeItem("token");
      return window.location.replace(Routes.LOGIN);
    }
    return Promise.reject(error);
  }
);

export default instance;
