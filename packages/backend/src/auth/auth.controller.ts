import {Body, Controller, Get, Param, Post, Query, Req, Request, UseGuards, Headers,} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {ApiTags} from "@nestjs/swagger";
import { IUserDataRespons } from "@project/common/features/auth/models";
import { ResetPasswordGuard } from "../auth/users/resetPassword.guard";
import {AuthService} from "./auth.service";
import {ChangePasswordDTO} from "./changePassword.dto";
import {ResetPasswordDTO} from "./resetPassword.dto";
import {SingInDTO} from "./singIn.dto";
import { AuthUser } from "./user.decorator";
import {UserData, UserDTO} from "./users/user.dto";
import {UsersService} from "./users/users.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService, private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() userDTO: UserDTO) {
      return this.userService.signUp(userDTO);
    }

    @Post('/signin')
    signIn(@Body() sigInDTO: SingInDTO) {
      return this.authService.signIn(sigInDTO);
    }

    @Post('/reset-password')
    sendEmailForResetPassword(@Body() resetPasswordDTO: ResetPasswordDTO) {
        return this.authService.sendEmailForResetPassword(resetPasswordDTO.email);
    }
    @UseGuards(ResetPasswordGuard)
    @Post('/change-password')
    changePassword(@Body() changePasswordDTO: ChangePasswordDTO, @Req() request: Request) {
      return this.authService.changePassword(changePasswordDTO, request.headers["token"]);
    }

    @Get('/user')
    @UseGuards(AuthGuard('jwt'))
    async getUserData( @AuthUser() auth: any): Promise<IUserDataRespons> {
     return {
       email: auth.email,
       name: auth.name
     };
    }

}
