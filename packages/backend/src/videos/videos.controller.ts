import { Controller, Get,Res, Req, UseGuards, Query, UsePipes, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import {ApiTags,ApiParam} from '@nestjs/swagger'
import { IVideosRespons } from '@project/common/src/videos/models'
import { Cron, CronExpression } from '@nestjs/schedule';


@ApiTags('videos')
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new FilterVideosDtoMaping())
    showAllVideos(@Query() param:FilterVideoDTO):Promise<Array<IVideosRespons>>{
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

    @Get('video/:id')
    findOne(@Param() id: string) {
            return this.videosService.getSingleVideo(id);
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    addNewVideoFromFiles() {
        this.videosService.addNewVideoFromFiles();
    }
}