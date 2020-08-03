import queryString from 'query-string';
import AxiosInstance from "../../config/axios/configAxios";
import {IFilterVideoRequest} from '../models';


export const getCategories = async () => AxiosInstance.get("/videos/category")

//TODO:ładny komentarz ?category=${categories}?title=${title}
export const getVideos = async (obj?:IFilterVideoRequest) => {
    AxiosInstance.get(`/vidoes?${queryString.stringify(obj)}`)
}