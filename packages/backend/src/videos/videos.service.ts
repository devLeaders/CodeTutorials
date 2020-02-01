import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VideosEntity } from './videos.entity';
import { InjectRepository } from '@nestjs/typeorm';

class TestDTO {
    title:string
}

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) private videosRepository: Repository<VideosEntity>,
    ){}

    async showAll(){
        return await this.videosRepository.find({select:["title"]});
    }
}
