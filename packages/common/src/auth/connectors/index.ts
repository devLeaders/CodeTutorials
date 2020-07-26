import {ISingInRequest,IUserRequest} from '../models';
import AxiosInstance from "../../config/axios/configAxios";


export function signUp(obj:IUserRequest){
    AxiosInstance.post(`/signup`,obj)
}

export function signin(obj:ISingInRequest){
    AxiosInstance.post(`/signin`,obj)
}