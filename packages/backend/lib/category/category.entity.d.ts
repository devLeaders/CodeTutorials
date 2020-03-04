import { VideosEntity } from '../videos/videos.entity';
export declare class CategoryEntity {
    id: number;
    nameCategory: string;
    videos: Promise<VideosEntity>;
}
