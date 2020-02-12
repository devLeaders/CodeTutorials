import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, Unique } from 'typeorm';


    @Entity()
    @Unique(['email'])
    export class UserEntity extends BaseEntity {
        @PrimaryGeneratedColumn('uuid') id: number;

        @CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' }) created: string;

        @Column("varchar", { length: 255 }) email: string;

        @Column("varchar", { length: 255 }) password: string;

        @Column() salt: string;
       
    }
