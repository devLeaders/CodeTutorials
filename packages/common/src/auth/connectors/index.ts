import { ISignInRequest, IUserRequest, ISignInResponse, ISignInGoogleRequest } from "../models";
import AxiosInstance from "../../config/axios/configAxios";
import { AxiosPromise } from "axios";

export function signUp(obj: IUserRequest): AxiosPromise<any> {
  return AxiosInstance.post(`/auth/signup`, obj);
}

export function signIn(obj: ISignInRequest): AxiosPromise<ISignInResponse> {
  return AxiosInstance.post(`/auth/signin`, obj);
}
export function signInGoogle(obj: ISignInGoogleRequest): AxiosPromise<ISignInResponse> {
  return AxiosInstance.post(`/firebase-auth/google`, obj);
}
