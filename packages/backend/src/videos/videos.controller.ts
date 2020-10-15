import { Controller, Get, UseGuards, Query, UsePipes } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CategoryListDTO, FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger'
import { Cron, CronExpression } from '@nestjs/schedule';
import { ResponseVersionCategory } from "@project/common/features/enums";
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
    getAllCategoryList(@Query() param: CategoryListDTO) {
        return this.videosService.getAllCategoryList(param.responseVersion === ResponseVersionCategory.OnlyCategory);
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    addNewVideoFromFiles() {
        this.videosService.addNewVideoFromFiles();
    }
}