import {Body, Controller, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {ChangePasswordDTO} from "./changePassword.dto";
import {ResetPasswordDTO} from "./resetPassword.dto";
import {SingInDTO} from "./singIn.dto";
import {UserDTO} from "./users/user.dto";
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
    resetPassword(@Body() resetPasswordDTO: ResetPasswordDTO) {
        return this.authService.sendEmailForResetPassword(resetPasswordDTO.email);
    }

    @Post('/change-password')
    changePassword(@Body() changePasswordDTO: ChangePasswordDTO) {
        return this.authService.changePassword(changePasswordDTO);
    }
}
