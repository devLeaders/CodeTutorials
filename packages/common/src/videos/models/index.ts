import { IsString, IsNumberString, IsOptional, Min } from 'class-validator';

export class FilterVideoDTO {

    @IsOptional()
    @IsNumberString()
    page?: number;

    @IsOptional()
    @IsString()
    title?: string;
    
    category: string; 
}