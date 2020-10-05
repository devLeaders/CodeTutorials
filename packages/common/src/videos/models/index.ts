import { ResponseVersionCategory } from "../../Enums";


export interface IFilterVideoRequest {
    page?: number;
    title?: string;   
    category?: string; 
}

export interface IResponseVersionCategoryRequest {
    responseVersionCategory: ResponseVersionCategory;
}