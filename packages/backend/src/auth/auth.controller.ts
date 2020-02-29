import { UserDTO } from './user.dto';
import { Controller, Post, Body, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) userDTO: UserDTO){
      return this.authService.signUp(userDTO);
    }
}