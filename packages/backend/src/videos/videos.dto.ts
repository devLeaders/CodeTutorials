import { IsString, IsNumberString, IsOptional, Min } from 'class-validator';
import {IFilterVideoRequest, IResponseVersionCategoryRequest} from '@project/common/features/videos/models'
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
    
    @ApiProperty()
    category: string; 
}

export class ResponseVersionCategoryDTO implements IResponseVersionCategoryRequest{

    @ApiProperty({name:"responseVersionCategory", enum:["only"], required:false})
    @IsOptional()
    responseVersionCategory: ResponseVersionCategory;
    
}