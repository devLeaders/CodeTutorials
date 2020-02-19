import { Module } from '@nestjs/common';
import { VideosModule } from 'src/videos/videos.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryRepository } from './category.repository'


@Module({
    imports: [TypeOrmModule.forFeature([CategoryRepository]), VideosModule],
})
export class CategoryModule {}
