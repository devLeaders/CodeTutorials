import { UserDTO } from './users/user.dto';
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UsersService } from './users/users.service';
import {AuthService} from './auth.service';
import { SingInDTO } from './singIn.dto';
import {ApiTags, ApiParam} from '@nestjs/swagger'
import { ResetPasswordDTO } from './resetPassword.dto';
import { ChangePasswordDTO } from './changePassword.dto';

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
    resetPassword(@Body() resetPasswordDTO: ResetPasswordDTO){
      return this.authService.resetPassword(resetPasswordDTO.email);
    }

    @Post('/change-password')
    changePassword(@Body() changePasswordDTO: ChangePasswordDTO){
      return this.authService.changePassword(changePasswordDTO);
    }
}