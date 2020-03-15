import {Entity, PrimaryGeneratedColumn, Column,ManyToMany,JoinTable, JoinColumn} from "typeorm";
import VideosEntity from "./videos.entity";

@Entity('category')
class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => VideosEntity, videos => videos.category)
    videos: VideosEntity[];
}

export default CategoryEntity