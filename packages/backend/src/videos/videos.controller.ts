import { Controller, Get, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    showAllVideos(@Query('page') page:number){
        return this.videosService.getAll(page);
    }

    @Get('category')
    getAllCategoryList(@Query('page') page:number){
        return this.videosService.getAllCategoryList(page);
    }
}
