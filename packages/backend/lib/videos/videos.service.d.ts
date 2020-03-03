import { Repository } from 'typeorm';
import VideosEntity from './videos.entity';
import CategoryEntity from './category.entity';
export declare class VideosService {
    private videosRepository;
    private CategoriesRepository;
    constructor(videosRepository: Repository<VideosEntity>, CategoriesRepository: Repository<CategoryEntity>);
    getAll(): Promise<VideosEntity[]>;
}
