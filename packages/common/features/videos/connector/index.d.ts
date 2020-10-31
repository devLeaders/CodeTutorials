import { AxiosResponse } from 'axios';
import { IFilterVideoRequest } from '../models';
import { IVideosRespons } from '../models';
export declare const getCategories: () => Promise<AxiosResponse<any>>;
export declare const getVideos: (obj?: IFilterVideoRequest) => Promise<AxiosResponse<IVideosRespons[]>>;
export declare const getVideo: (id: number) => Promise<AxiosResponse<IVideosRespons>>;
