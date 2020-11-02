import { IsEmail, MinLength  } from 'class-validator';
import {IUserRequest, IUserDataRespons} from '@project/common/features/auth/models'
import {ApiProperty} from '@nestjs/swagger'

export class UserDTO implements IUserRequest {  

    @ApiProperty()
    @IsEmail() 
    email: string;

    @ApiProperty()
    @MinLength(8)   
    password: string; 
      
}

export class UserData implements IUserDataRespons {
    @ApiProperty()
    @IsEmail() 
    email: string;

    @ApiProperty()
    name: string ; 
}