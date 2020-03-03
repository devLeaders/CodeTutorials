export interface VideosDTO {
    id: string,
    title: string,
    urlTrailer: string;
    urlPhoto: string;
}

export class ShortVersionDTO {
    id: string = null;  
    title: string = null;
    urlTrailer: string = null;
    urlPhoto: string = null;
}