import { AxiosPromise } from "axios";
import { ISingInRequest, IUserRequest, ISingInResponse, IUserDataRespons } from "../models";
import AxiosInstance from "../../config/axios/configAxios";

export function signUp(obj: IUserRequest): AxiosPromise<any> {
  return AxiosInstance.post(`/auth/signup`, obj);
}

export function signIn(obj: ISingInRequest): AxiosPromise<ISingInResponse> {
  return AxiosInstance.post(`/auth/signin`, obj);
}

export function userData(obj:any): AxiosPromise<IUserDataRespons> {
  return AxiosInstance.get(`/auth/user`, obj);
}
