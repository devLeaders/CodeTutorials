import queryString from 'query-string';
import AxiosInstance from "../../config/axios/configAxios";
import {IFilterVideoRequest} from '../models';


export const getCategories = async () => AxiosInstance.get("/videos/category")


export const getVideos = async (obj?:IFilterVideoRequest) => {
    return AxiosInstance.get(`/vidoes?${queryString.stringify(obj)}`)
}