import { IsString, IsNumberString, IsOptional, Min } from 'class-validator';
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

    @IsOptional()
    @IsNumberString()
    page: number;

    @IsOptional()
    @IsString()
    title: string;
    
    category: string; 
}