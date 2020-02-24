import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    showAllVideos(){
        return this.videosService.getAll();
    }
}
