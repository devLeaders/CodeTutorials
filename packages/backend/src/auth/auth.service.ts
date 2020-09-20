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
import nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ChangePasswordDTO } from './changePassword.dto';
import { TokenService } from './token/token.service';
import { TokenDTO } from './token.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService,
    private configService: ConfigService,
    private tokenService: TokenService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) { }

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
    try {

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

      let transporter = nodemailer.createTransport({
        host: this.configService.get<string>("MAIL_HOST"),
        port: Number(this.configService.get<number>("MAIL_PORT")),
        secure: (this.configService.get<string>("MAIL_SECURE") == "true"),
        auth: {
          user: this.configService.get<string>("MAIL_LOGIN"),
          pass: this.configService.get<string>("MAIL_PASSWORD"),
        },
      });

      await transporter.sendMail({
        from: this.configService.get<string>("MAIL_SENDER"),
        to: email,
        subject: "Reset Password",
        html: `<h1>
      Reset Hasła
      </h1>
      <span>
      Cześć, niedawno otrzymaliśmy od Ciebie prośbę o zresetowanie hasła do tego konta My Netflix. </br>
      Aby zaktualizować hasło, kliknij poniższy link.</br><br>
      <a href="http://localhost:3001/reset-password/${jwtToken}">Reset hasła</a>
      </span>`
      });

      return { message: "Email send.", jwtToken }

    } catch (error) {
      return { message: error.message ? error.message : "Error", error }
    }
  }

  async changePassword(changePasswordDTO: ChangePasswordDTO) {
    try {
      const jwtToken = verify(changePasswordDTO.token, process.env.SECRET_KEY);

      const userEmail = jwtToken["email"];
      const user: UserEntity = await this.usersService.findByEmail(userEmail);

      const tokenExpiresEpoch = jwtToken["exp"];

      if (changePasswordDTO.password != changePasswordDTO.repeatPassword) {
        return { message: "Password and repeat password must be the same." }
      }

      if (await this.tokenService.tokenUsedUp(jwtToken.toString())) {
        return { message: "Token used up." };
      }

      await this.usersRepository.update(user, { password: changePasswordDTO.password });

      const tokenDto = new TokenDTO();
      tokenDto.token = jwtToken.toString();
      const dateExpired = new Date(0);
      dateExpired.setUTCSeconds(tokenExpiresEpoch);
      tokenDto.dateExpired = dateExpired;

      await this.tokenService.addToken(tokenDto);

      return { message: "Password changed." };

    } catch (error) {
      return { message: error.message ? error.message : "Error", error }
    }


  }
}
