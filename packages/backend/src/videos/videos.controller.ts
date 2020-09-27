import { Controller, Get,Res, Req, UseGuards, Query, UsePipes, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import {ApiTags,ApiParam} from '@nestjs/swagger'
import { Cron, CronExpression } from '@nestjs/schedule';


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

    @Get(['category/:only','category'])
    getAllCategoryList(@Param('only') only:string){
        return this.videosService.getAllCategoryList(only === "only");
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    addNewVideoFromFiles() {
        this.videosService.addNewVideoFromFiles();
    }
}