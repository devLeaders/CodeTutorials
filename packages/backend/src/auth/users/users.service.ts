import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../users/user.repository';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
<<<<<<< HEAD
import { Repository,getCustomRepository } from 'typeorm';
=======
import { SignInPayload } from './models/SignInPayload';
>>>>>>> qa2

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
<<<<<<< HEAD
        // return user.depopulate('password');
    }

    async findByPayload(payload: any) {
=======
    }

    async findByPayload(payload: SignInPayload) {
>>>>>>> qa2
        const {id,email} = payload;
        return await this.usersRepository.findOne({where:{ email,id}})
    }
}
