import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { CategoryEntity } from '../category/category.entity'

    @Entity('videos')
    export class VideosEntity {
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

        @OneToMany(() => CategoryEntity, 
            category => category.videos) 
            category: Promise<CategoryEntity[]>
    }