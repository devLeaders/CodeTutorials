import { ResponseVersionCategory } from "../../Enums";
export interface IVideosRespons {
    id: number;
    created: Date;
    title: string;
    description: string;
    dateCreation: string;
    country: string;
    language: string;
    duration: number;
    urlTrailer: string;
    urlVideo: string;
    urlPhoto: string;
    category: Array<any>;
    idYoutube: string;
}
export interface IFilterVideoRequest {
    page?: number;
    title?: string;
    category?: string;
    limit?: number;
}
export interface ICategoryRequest {
    responseVersion: ResponseVersionCategory;
}
