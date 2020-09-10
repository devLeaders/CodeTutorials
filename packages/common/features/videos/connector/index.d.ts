import { IFilterVideoRequest } from '../models';
export declare const getCategories: () => Promise<import("axios").AxiosResponse<any>>;
export declare const getVideos: (obj?: IFilterVideoRequest) => Promise<import("axios").AxiosResponse<any>>;
