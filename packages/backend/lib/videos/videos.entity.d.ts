import CategoryEntity from './category.entity';
declare class VideosEntity {
    id: number;
    created: Date;
    title: string;
    description: string;
    dateCreation: string;
    country: string;
    language: string;
    duration: number;
    urlTrailer: string;
    urlVideo: string;
    urlPhoto: string;
    category: CategoryEntity[];
}
export default VideosEntity;
