import { IsString, IsNumberString, IsOptional, Min } from 'class-validator';
import {IFilterVideoRequest, ICategoryOptionsRequest} from '@project/common/features/videos/models'
import {ApiProperty} from '@nestjs/swagger'
import { VideoCategoryEnum } from '../videos/videos.enum';

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

export class CategoryOptionsDTO implements ICategoryOptionsRequest{

    @ApiProperty({required:false})
    @IsOptional()
    categoryOptions: VideoCategoryEnum;
    
}