import { IsString, IsNumberString, IsOptional, Min } from 'class-validator';
import {IFilterVideoRequest, ICategoryRequest} from '@project/common/features/videos/models'
import {ApiProperty} from '@nestjs/swagger'
import {ResponseVersionCategory} from "@project/common/features/enums";

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

export class FilterVideoDTO implements IFilterVideoRequest{

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumberString()
    page: number;

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    title: string;
    
    @ApiProperty({required:false})
    @IsNumberString()
    @IsOptional()
    limit: number;
    
    @ApiProperty({required:false})
    @IsOptional()
    category: string; 
}

export class CategoryListDTO implements ICategoryRequest{

    @ApiProperty({name:"responseVersion", enum:["only", ""], required:false})
    @IsOptional()
    responseVersion: ResponseVersionCategory;
    
}