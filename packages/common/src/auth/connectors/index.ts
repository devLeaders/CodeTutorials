import {ISingInRequest,IUserRequest,ISingInResponse} from '../models';
import AxiosInstance from "../../config/axios/configAxios";
import { AxiosResponse, AxiosPromise } from 'axios';


export function signUp(obj:IUserRequest):AxiosPromise<any>{
    return AxiosInstance.post(`/signup`,obj);
}

export function signIn(obj:ISingInRequest):AxiosPromise<ISingInResponse>{
    return AxiosInstance.post(`/signin`,obj)
}