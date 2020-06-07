import { Injectable } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import VideosEntity from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {ShortVersionDTO, FilterVideoDTO} from './videos.dto'
import CategoryEntity from './category.entity';
import * as fs from 'fs';

const shortVersion = Object.keys(new ShortVersionDTO()) as any;

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) private videosRepository: Repository<VideosEntity>,
    @InjectRepository(CategoryEntity) private categoriesRepository: Repository<CategoryEntity>
    ){}

    async getAll(param:FilterVideoDTO){
        const page = (param.page)?param.page:1;
        let query = getRepository(VideosEntity)
        .createQueryBuilder("videos")
        .leftJoinAndSelect("videos.category", "category")
        .take(20)
        .skip(20 * (page-1))
        .where(`videos.id IS NOT NULL`)
        if(param.title){
           query = query.andWhere(`videos.title LIKE :title`, {title: param.title})
        }
        if(param.category){
            query = query.andWhere(`category.id IN (:...ids)`, {ids: param.category})
         }

        const videos = query.getMany();
        return videos;
    }

    async getAllCategoryList(){
        return await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.videos", "videos")
        .getMany();
    }

    async getStream(id: string, res: any, req: any) {
        const video = await this.getSingleVideo(id)
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
