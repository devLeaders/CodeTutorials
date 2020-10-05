import { Controller, Get,Res, Req, UseGuards, Query, UsePipes, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { ResponseVersionCategoryDTO, FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger'
import { Cron, CronExpression } from '@nestjs/schedule';
import {ResponseVersionCategory} from "@project/common/features/enums";
@ApiTags('videos')
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new FilterVideosDtoMaping())
    showAllVideos(@Query() param:FilterVideoDTO){
        return this.videosService.getAll(param);
    }

    @Get("category")
    getAllCategoryList(@Query() param:ResponseVersionCategoryDTO) {
        return this.videosService.getAllCategoryList(param.responseVersionCategory === ResponseVersionCategory.OnlyCategory);
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    addNewVideoFromFiles() {
        this.videosService.addNewVideoFromFiles();
    }
}