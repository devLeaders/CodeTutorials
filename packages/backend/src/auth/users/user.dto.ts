import { IsEmail, MinLength  } from 'class-validator';
import {IUserRequest} from '@project/common/features/auth/models'
import {ApiProperty} from '@nestjs/swagger'

export class UserDTO implements IUserRequest {  

    @ApiProperty()
    @IsEmail() 
    email: string;

    @ApiProperty()
    @MinLength(8)   
    password: string; 
      
}