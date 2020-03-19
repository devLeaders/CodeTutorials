import { IsString, IsNumber  } from 'class-validator';
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

export class FilterVideoDTO {

    @IsNumber()
    page: number;

    @IsString()
    title: string;
    
    category: string; 
}