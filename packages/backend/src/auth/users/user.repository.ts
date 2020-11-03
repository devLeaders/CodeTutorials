import { UserDTO } from './user.dto';
import { Repository, EntityRepository, Connection} from 'typeorm';
import {UserEntity} from './user.entity';
import {ConflictException, InternalServerErrorException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SqlErrorCode } from '../sql.error.code';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
    async signUp(userDTO: UserDTO): Promise<void> {               
        
        const user = new UserEntity();        
        user.email = userDTO.email;
        user.name = userDTO.name;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(userDTO.password, user.salt);        

        try {
            await user.save();
        } catch(error) {
            if (error.code === SqlErrorCode.DUPLICATE_EMAIL){
                throw new ConflictException("Given email already exists in database");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}

export const UsersRepositoryProvider = {
    provide: 'UsersRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UsersRepository),
    inject: [Connection],
};