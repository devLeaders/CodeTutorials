import { UserEntity } from './users/user.entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SingInDTO } from './singIn.dto';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

import { SignInPayload } from './users/models/SignInPayload';
import { ErrorMessage } from './users/enums/ErrorMessage';
import { NotificationsService } from '../notifications/notifications.service';
import { UsersRepository } from './users/user.repository';
import {
  MessageTypes,
  TokenTypes,
} from '../notifications/message.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async signIn(sigInDTO: SingInDTO) {
    const user = await this.usersService.findByEmail(sigInDTO.email);

    if (!user)
      throw new HttpException(
        ErrorMessage.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );

    if (await bcrypt.compare(sigInDTO.password, user.password)) {
      const sterilizedUserData = this.usersService.sanitizeUser(user);
      const payload = { id: user.id, email: user.email };

      const jwtToken = sign(payload, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRESIN_JWT,
      });


      this.notificationsService.saveToken(
        user,
        sigInDTO.firebaseToken,
        sigInDTO.hmsToken,
      );

      return {
        user: sterilizedUserData,
        token: jwtToken,
      };
    } else {
      throw new HttpException(
        ErrorMessage.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async validateUser(payload: SignInPayload) {
    return await this.usersService.findByPayload(payload);
  }

  async resetPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    
    if (!user)
      throw new HttpException(
        ErrorMessage.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );

    const payload = { id: user.id, email: user.email };

    const jwtToken = sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_RESET,
    });

  }

  async changePassword(token: string) {
    const jwtToken = verify(token, process.env.SECRET_KEY);

    

  }
}
