import { AxiosPromise } from "axios";
import { ISingInRequest, IUserRequest, ISingInResponse } from "../models";
export declare function signUp(obj: IUserRequest): AxiosPromise<any>;
export declare function signIn(obj: ISingInRequest): AxiosPromise<ISingInResponse>;
