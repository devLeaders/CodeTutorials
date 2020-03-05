import { UserDTO } from './user.dto';
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendEmail } from './SendEmail.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private sendEmail: SendEmail) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) userDTO: UserDTO) {
    this.sendEmail.send(userDTO);
    return this.authService.signUp(userDTO);
  }
}
