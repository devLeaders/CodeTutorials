import { Controller, Get,Res, Req, UseGuards, Query, UsePipes } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import {ApiTags,ApiParam} from '@nestjs/swagger'


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

    @Get('category')
    getAllCategoryList(){
        return this.videosService.getAllCategoryList();
    }

    @ApiParam({ name: 'id', type:'string' })
    @Get('/:params')
    getStream(@Query() id: string ,@Res() res, @Req() req) {
    this.videosService.getStream(id, res, req);
  }
}
