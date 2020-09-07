import { ISingInRequest, IUserRequest, ISingInResponse } from "../models";
import AxiosInstance from "../../config/axios/configAxios";
import { AxiosResponse, AxiosPromise } from "axios";

export function signUp(obj: IUserRequest): AxiosPromise<any> {
  return AxiosInstance.post(`/auth/signup`, obj);
}

export function signIn(obj: ISingInRequest): AxiosPromise<ISingInResponse> {
  return AxiosInstance.post(`/auth/signin`, obj);
}
export function signInGoogle(obj: any): AxiosPromise<any> {
  return AxiosInstance.post(`auth/google`, obj);
}
