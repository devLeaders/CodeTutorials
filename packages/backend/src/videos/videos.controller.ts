import { Controller, Get, Res, Req } from '@nestjs/common';
import { VideosService } from './videos.service';
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    showAllVideos(){
        return this.videosService.getAll();
    }

    @Get('category')
    getAllCategoryList(){
        return this.videosService.getAllCategoryList();
    }

    @Get('/video')
    getStream(@Res() res, @Req() req) {
    this.videosService.getStream(res, req);
  }
}
