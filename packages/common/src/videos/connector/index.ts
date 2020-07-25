import queryString from 'query-string';
import AxiosInstance from "../../config/axios/configAxios";
import {FilterVideoDTO} from '../models';
export const getCategories = async () => AxiosInstance.get("/videos/category")

//TODO:ładny komentarz ?category=${categories}?title=${title}
export const getVideos = async (categories: string, title: string) => {

    const data:FilterVideoDTO = {
        category:categories,
        title
    }

    AxiosInstance.get(`/vidoes?${queryString.stringify(data)}`)
}