export interface IFilterVideoRequest {
    page?: number;
    title?: string;   
    category?: number; 
    limit?: number
}

export interface IVideosRespons {
    id: number,
    created: Date,
    title: string,
    description: string,
    dateCreation: string,
    country: string,
    language: string,
    duration: number,
    urlTrailer: string,
    urlVideo: string,
    urlPhoto: string,
    category: Array<any>
}