import axios, { AxiosResponse, AxiosError } from "axios";

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
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("token");
      return window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
