export interface VideoDTO {
    id: string,
    title: string,
    urlTrailer: string;
    urlPhoto: string;
}

export class ShortVersionDTO {
    title: string = null;
    urlTrailer: string = null;
    urlPhoto: string = null;
}