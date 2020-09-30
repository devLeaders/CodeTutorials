

export interface IFilterVideoRequest {
    page?: number;
    title?: string;   
    category?: string; 
}

export interface ICategoryOptionsRequest {
    categoryOptions?: "only" | "";
}