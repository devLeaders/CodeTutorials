import { UserDTO } from './users/user.dto';
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UsersService } from './users/users.service';
import {AuthService} from './auth.service';
import { SingInDTO } from './singIn.dto';
import {ApiTags, ApiParam} from '@nestjs/swagger'

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

    @Post('/reset-password')
    resetPassword(@Body() email: string){
      return this.authService.resetPassword(email);
    }

    @ApiParam({ name: 'token', type:'string' })
    @Get('/change-password/:token')
    changePassword(@Query() token: string){
      return this.authService.changePassword(email);
    }
}