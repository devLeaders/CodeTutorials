import { Repository } from 'typeorm';
import { VideosEntity } from './videos.entity';
export declare class VideosService {
    private videosRepository;
    constructor(videosRepository: Repository<VideosEntity>);
    showAll(): Promise<VideosEntity[]>;
}
