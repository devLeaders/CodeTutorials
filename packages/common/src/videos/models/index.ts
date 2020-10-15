import { ResponseVersionCategory } from "../../Enums";


export interface IFilterVideoRequest {
    page?: number;
    title?: string;   
    category?: string; 
}

export interface ICategoryRequest {
    responseVersion: ResponseVersionCategory;
}