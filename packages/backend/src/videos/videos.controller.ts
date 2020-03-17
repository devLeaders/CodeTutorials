import { Controller, Get, UseGuards } from '@nestjs/common';
import { VideosService } from './videos.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    showAllVideos(){
        return this.videosService.getAll();
    }

    @Get('category')
    getAllCategoryList(){
        return this.videosService.getAllCategoryList();
    }
}
