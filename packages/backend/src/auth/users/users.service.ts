import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../users/user.repository';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { Repository,getCustomRepository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository){}

    async signUp(userDTO: UserDTO): Promise<void>{
        return this.usersRepository.signUp(userDTO);           
    }

    async findByEmail(email:string) {
        return await this.usersRepository.findOne({where:{ email}})
    }

    sanitizeUser(user: UserEntity) {
        const sanitized = {...user};
        delete sanitized['password'];
        delete sanitized['salt'];
        return sanitized;
        // return user.depopulate('password');
    }

    async findByPayload(payload: any) {
        const {id,email} = payload;
        return await this.usersRepository.findOne({where:{ email,id}})
    }
}
