import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import {sign, verify} from "jsonwebtoken";
import nodemailer from "nodemailer";
import {NotificationsService} from "../notifications/notifications.service";
import {ChangePasswordDTO} from "./changePassword.dto";
import {SingInDTO} from "./singIn.dto";
import {Token} from "./token";
import {TokenService} from "./token/token.service";
import {ErrorMessage} from "./users/enums/ErrorMessage";

import {SignInPayload} from "./users/models/SignInPayload";
import {UserEntity} from "./users/user.entity";
import {UsersRepository} from "./users/user.repository";
import {UsersService} from "./users/users.service";
import { IJWTToken } from '@project/common/features/auth/models';
import {ResponseMessage} from '@project/common/features/enums';
import hbs from "nodemailer-express-handlebars";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService,
    private tokenService: TokenService,
    private configService: ConfigService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async signIn(sigInDTO: SingInDTO) {
    const user = await this.usersService.findByEmail(sigInDTO.email);

    if (!user) {
      throw new HttpException(
        ErrorMessage.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }

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

      if (!user) {
        throw new HttpException(
            ErrorMessage.USER_NOT_FOUND,
            HttpStatus.NOT_FOUND,
        );
      }

      const payload = { id: user.id, email: user.email };

      const jwtToken = sign(payload, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_RESET,
      });

      const options = {
        viewEngine: {
          partialsDir: __dirname + "/views/partials",
          layoutsDir: __dirname + "/views/layouts",
          extname: ".hbs"
        },
        extName: ".hbs",
        viewPath: __dirname + "/views"
      };

      const transporter = nodemailer.createTransport({
        host: this.configService.get<string>('MAIL_HOST'),
        port: Number(this.configService.get<number>('MAIL_PORT')),
        secure: (this.configService.get<string>('MAIL_SECURE') === 'true'),
        auth: {
          user: this.configService.get<string>('MAIL_LOGIN'),
          pass: this.configService.get<string>('MAIL_PASSWORD'),
        },
      });

      transporter.use("compile", hbs(options));

      await transporter.sendMail({
        from: this.configService.get<string>('MAIL_SENDER'),
        to: email,
        subject: 'Reset Password',
        template: "resetPassword",
        context: {jwtToken : jwtToken}
      });

      return { message: ResponseMessage.EMAIL_SEND, jwtToken };

    } catch (error) {
      return { message: error.message ? error.message : 'Error', error };
    }
  }

  async changePassword(changePasswordDTO: ChangePasswordDTO) {
    try {
      const jwtToken: IJWTToken = verify(changePasswordDTO.token, process.env.SECRET_KEY) as IJWTToken;

      const userEmail = jwtToken.email;
      const user: UserEntity = await this.usersService.findByEmail(userEmail);

      const tokenExpiresEpoch = jwtToken.exp;

      if (await this.tokenService.tokenUsedUp(changePasswordDTO.token)) {
        return {message: ResponseMessage.TOKEN_USED_UP};
      }

      await this.usersRepository.update(user, {password: changePasswordDTO.password});

      const tokenDto = new Token();
      tokenDto.token = changePasswordDTO.token;
      const dateExpired = new Date(0);
      dateExpired.setUTCSeconds(tokenExpiresEpoch);
      tokenDto.dateExpired = dateExpired;

      await this.tokenService.addToken(tokenDto);

      return {message: ResponseMessage.PASSWORD_CHANGED};

    } catch (error) {
      return {message: error.message ? error.message : 'Error', error};
    }
  }
  }
