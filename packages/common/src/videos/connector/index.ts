import { AxiosResponse } from 'axios';
import queryString from 'query-string';
import AxiosInstance from "../../config/axios/configAxios";
import {IFilterVideoRequest} from '../models';
import { IVideosRespons } from '../models'

export const getCategories = async () => AxiosInstance.get("/videos/category")


export const getVideos = async (obj?:IFilterVideoRequest):Promise<AxiosResponse<Array<IVideosRespons>>> => {
    return AxiosInstance.get(`/videos?${queryString.stringify(obj)}`)
}