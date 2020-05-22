import { Injectable } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import VideosEntity from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {ShortVersionDTO} from './videos.dto'
import CategoryEntity from './category.entity';
import * as fs from 'fs';

const shortVersion = Object.keys(new ShortVersionDTO()) as any;

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) private videosRepository: Repository<VideosEntity>,
    @InjectRepository(CategoryEntity) private categoriesRepository: Repository<CategoryEntity>
    ){}

    async getAll(){
        return await this.videosRepository.find({select:shortVersion, relations:["category"]});
    }

    
    async getAllCategoryList(){
        return await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.videos", "videos")
        .getMany();
    }

    async getStream(res: any, req: any) {
        const video = await this.getSingleVideo("d8ffbf77-2bed-4694-a773-61f800ec2a6e")
        console.log(video)
        const path = 'uploads/mov_bbb.mp4';
        const stat = fs.statSync(path);
        const range = req.headers.range;
        const fileSize = stat.size;
        try {
          if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;
            const VideoReadStream = fs.createReadStream(path, { start, end });
            const head = {
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunksize,
              'Content-Type': 'video/mp4',
            };
            res.writeHead(206, head);
            VideoReadStream.pipe(res);
          } else {
            const head = {
              'Content-length': fileSize,
              'Content-Type': 'video/mp4',
            };
            res.writeHead(200, head);
            fs.createReadStream(path).pipe(res);
          }
        } catch (err) {
          return err;
        }
      }

    async getSingleVideo(id: string): Promise<VideosEntity> {
        return await this.videosRepository.findOne(id)
    }
}
