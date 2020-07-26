import { UserDTO } from './users/user.dto';
import { Controller, Post, Body} from '@nestjs/common';
import { UsersService } from './users/users.service';
import {AuthService} from './auth.service';
import { SingInDTO } from './singIn.dto';
import {ApiTags} from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class AuthController{
    constructor(private userService: UsersService, private authService: AuthService) {}


    @Post('/signup')
    signUp(@Body() userDTO: UserDTO){
      return this.userService.signUp(userDTO);
    }


    @Post('/signin')
    signIn(@Body() sigInDTO: SingInDTO){
      return this.authService.signIn(sigInDTO);
    }
}