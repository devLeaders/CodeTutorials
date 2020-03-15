import { Controller, Get, Param, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    showAllVideos(@Query() param:FilterVideoDTO){
        console.log(param)
        return this.videosService.getAll(param);
    }

    @Get('category')
    getAllCategoryList(){
        return this.videosService.getAllCategoryList();
    }
}
