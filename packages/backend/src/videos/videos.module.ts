import { NotificationsModule } from './../notifications/notifications.module';
import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import VideosEntity from './videos.entity';
import CategoryEntity from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideosEntity, CategoryEntity]), NotificationsModule],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
