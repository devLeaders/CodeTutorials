import { Injectable } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import VideosEntity from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {ShortVersionDTO} from './videos.dto'
import CategoryEntity from './category.entity';

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
}
