import { Injectable } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import VideosEntity from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {ShortVersionDTO, FilterVideoDTO} from './videos.dto'
import CategoryEntity from './category.entity';

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
            const categoryArray = param.category.split(',')
            query = query.andWhere(`category.id IN (:...ids)`, {ids: categoryArray})
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
}
