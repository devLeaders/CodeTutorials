import {Body, Controller, Get, Param, Post, Query, Req, Request, UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {ApiTags} from "@nestjs/swagger";
import { TokenService } from "../auth/token/token.service";
import { ResetPasswordGuard } from "../auth/users/resetPassword.guard";
import {AuthService} from "./auth.service";
import {ChangePasswordDTO} from "./changePassword.dto";
import {ResetPasswordDTO} from "./resetPassword.dto";
import {SingInDTO} from "./singIn.dto";
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

    @Get('/user/:id')
    @UseGuards(AuthGuard('jwt'))
    getUserData(@Param() user:UserData) {
      return this.authService.findUserByID(user);
    }
    
}
