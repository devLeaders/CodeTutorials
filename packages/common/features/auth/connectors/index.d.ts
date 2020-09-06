import { ISingInRequest, IUserRequest, ISingInResponse } from '../models';
import { AxiosPromise } from 'axios';
export declare function signUp(obj: IUserRequest): AxiosPromise<any>;
export declare function signIn(obj: ISingInRequest): AxiosPromise<ISingInResponse>;
