import {Entity, PrimaryGeneratedColumn, Column,ManyToMany,JoinTable} from "typeorm";
import VideosEntity from "./videos.entity";

@Entity('category')
class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => VideosEntity)
    @JoinTable()
    videos: VideosEntity[];

}

export default CategoryEntity