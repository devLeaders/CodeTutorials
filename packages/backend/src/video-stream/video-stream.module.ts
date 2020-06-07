import { Module } from '@nestjs/common';
import { VideoStreamController } from './video-stream.controller';
import { VideoStreamService } from './video-stream.service';

@Module({
  controllers: [VideoStreamController],
  providers: [VideoStreamService],
})
export class VideoStreamModule {}
