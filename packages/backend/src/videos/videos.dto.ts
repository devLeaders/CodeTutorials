import { IsString, IsNumberString, IsOptional, Min, IsNumber } from 'class-validator';
import {IFilterVideoRequest} from '@project/common/features/videos/models'
import {ApiProperty} from '@nestjs/swagger'
import { SortOptions, ColumnVideo } from '@project/common/features/enums';

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

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    @Min(1)
    count: number;

    @ApiProperty({name:"sort", enum:["ASC", "DESC"], required:false})
    @IsOptional()
    @IsString()
    sort: SortOptions;

    @ApiProperty({name:"columnSort", enum:[ "id", "created", "title", "dateCreation"], required:false})
    @IsOptional()
    @IsString()
    columnSort: ColumnVideo; 
}