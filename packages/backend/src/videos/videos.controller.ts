import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
import { VideosValidationPipe } from './videos.validation.pipe'
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    @UsePipes(new VideosValidationPipe())
    showAllVideos(@Query() param:FilterVideoDTO){
        return this.videosService.getAll(param);
    }

    @Get('category')
    getAllCategoryList(){
        return this.videosService.getAllCategoryList();
    }
}
