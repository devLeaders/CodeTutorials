import instance from "../../../config/axios/configAxios";

export const getCategories = async () => instance.get("/videos/category")

export const getVideos = async (categories: string, title: string) => {
    instance.get(`/vidoes?category=${categories}?title=${title}`)
}