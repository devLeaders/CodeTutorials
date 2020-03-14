import { Repository } from 'typeorm';
import VideosEntity from './videos.entity';
import CategoryEntity from './category.entity';
export declare class VideosService {
    private videosRepository;
    private categoriesRepository;
    constructor(videosRepository: Repository<VideosEntity>, categoriesRepository: Repository<CategoryEntity>);
    getAll(): Promise<VideosEntity[]>;
    getAllCategoryList(): Promise<CategoryEntity[]>;
}
