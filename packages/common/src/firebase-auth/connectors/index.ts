import { AxiosPromise } from "axios";
import AxiosInstance from "../../config/axios/configAxios";
import { ISignInGoogleRequest, ISingInResponse } from "../models";

export function signInGoogle(obj: ISignInGoogleRequest): AxiosPromise<ISingInResponse> {
  return AxiosInstance.post(`/firebase-auth/google`, obj);
}
