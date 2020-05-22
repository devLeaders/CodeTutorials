import { Controller, Get, Res, Req, Query } from '@nestjs/common';
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

    @Get('/:params')
    getStream(@Query() id: string ,@Res() res, @Req() req) {
    this.videosService.getStream(id, res, req);
  }
}
