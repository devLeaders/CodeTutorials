import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {VideosEntity} from './videos/videos.entity'
import { VideosModule } from './videos/videos.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORTDB),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [VideosEntity],
      synchronize: true,
    }),VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
