import instance from "../../../config/axios/configAxios";

export const getCategories = async () => instance.get("/videos/category")