import axios, { AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      return window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
