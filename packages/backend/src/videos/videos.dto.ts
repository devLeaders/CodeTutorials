import { IsString, IsNumberString, IsOptional, Min, IsNumber } from 'class-validator';
import {IFilterVideoRequest} from '@project/common/features/videos/models'
import {ApiProperty} from '@nestjs/swagger'

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
    @IsOptional()
    category: number;
    
    @ApiProperty({required:false})
    @IsNumberString()
    @IsOptional()
    limit: number;
}