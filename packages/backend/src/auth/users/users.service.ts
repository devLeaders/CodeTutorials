import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../users/user.repository';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { SignInPayload } from './models/SignInPayload';
import { ErrorMessage } from '../users/enums/ErrorMessage';

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

    async authorizedUser(email: string) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!user) {
            throw new HttpException(
                ErrorMessage.UNAUTHORIZED,
                HttpStatus.UNAUTHORIZED,
            );
        }

        return user;
    }

    sanitizeUser(user: UserEntity) {
        const sanitized = {...user};
        delete sanitized['password'];
        delete sanitized['salt'];
        return sanitized;
    }

    async findByPayload(payload: SignInPayload) {
        const {id,email} = payload;
        return await this.usersRepository.findOne({where:{ email,id}})
    }
}