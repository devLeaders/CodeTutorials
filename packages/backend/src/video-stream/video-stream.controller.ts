import { Controller, Get, Res, Req } from '@nestjs/common';
import { VideoStreamService } from './video-stream.service';

@Controller('videos')
export class VideoStreamController {
  constructor(private videoStreamService: VideoStreamService) {}

  @Get('/video')
  postStream(@Res() res, @Req() req) {
    this.videoStreamService.getVideo(res, req);
  }
}
