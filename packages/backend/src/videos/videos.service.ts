import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VideosEntity } from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {ShortVersionDTO} from './videos.dto'

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) private videosRepository: Repository<VideosEntity>,
    ){}

    async showAll(){
        return await this.videosRepository.find({select:Object.keys(new ShortVersionDTO()) as any});
    }
}
