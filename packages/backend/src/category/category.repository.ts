import { EntityRepository, Repository } from 'typeorm';
import {CategoryEntity} from './category.entity';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {}