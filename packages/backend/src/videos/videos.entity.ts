import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,ManyToMany,JoinTable } from 'typeorm';
import CategoryEntity from './category.entity';

    @Entity('videos')
    class VideosEntity {
        @PrimaryGeneratedColumn('uuid') id: number;

        @CreateDateColumn() created: Date;

        @Column('text') title: string;

        @Column('text') description: string;

        @Column('text') dateCreation: string;

        @Column('text') country: string;

        @Column('text') language: string;

        @Column('integer') duration: number;

        @Column('text') urlTrailer: string;

        @Column('text') urlVideo: string;

        @Column('text') urlPhoto: string;

        @ManyToMany(type => CategoryEntity,{
            cascade: ["insert"]
        })
        @JoinTable()
        category: CategoryEntity[];
    }

    export default VideosEntity;
