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

    async getAll(page:number=1, title: string){
        return await getRepository(VideosEntity)
        .createQueryBuilder("videos")
        .leftJoinAndSelect("videos.category", "category")
        // .where("videos.title = :title", { title: "Docker od podstaw"})
        .take(20)
        .skip(20 * (page-1))
        .getMany();
    }ś

    async getAllCategoryList(){
        return await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.videos", "videos")
        .getMany();
    }
}
