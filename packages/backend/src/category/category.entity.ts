import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { VideosEntity } from 'src/videos/videos.entity';

@Entity()
    export class CategoryEntity {
        @PrimaryGeneratedColumn() id: number;

        @Column('text') nameCategory: string;

        @ManyToOne(() => VideosEntity, videos => videos.category) 
        @JoinColumn() 
        videos: Promise<VideosEntity>
      
    }