import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import {sign, verify} from "jsonwebtoken";
import {NotificationsService} from "../notifications/notifications.service";
import {ChangePasswordDTO} from "./changePassword.dto";
import {SingInDTO} from "./singIn.dto";
import {TokenService} from "./token/token.service";
import {ErrorMessage} from "./users/enums/ErrorMessage";
import {SignInPayload} from "./users/models/SignInPayload";
import {UserEntity} from "./users/user.entity";
import {UsersRepository} from "./users/user.repository";
import {UsersService} from "./users/users.service";
import {IJWTToken} from "@project/common/features/auth/models";
import {ResponseMessage} from "@project/common/features/enums";
import {MailingService} from "./mailing/mailing.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService,
    private tokenService: TokenService,
    private mailingService: MailingService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) { }

  async signIn(sigInDTO: SingInDTO) {
    const user = await this.usersService.authorizedUser(sigInDTO.email);

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

  async sendEmailForResetPassword(email: string) {
    try {
      const user = await this.usersService.authorizedUser(email);

      const jwtToken = this.generateToken(user);

      await this.mailingService.sendResetPasswordEmail(user.email, jwtToken);

      return { message: ResponseMessage.EMAIL_SEND, jwtToken };

    } catch (error) {
      return { message: error.message ? error.message : 'Error', error };
    }
  }

  async changePassword(changePasswordDTO: ChangePasswordDTO) {
    try {
      const jwtToken: IJWTToken = verify(changePasswordDTO.token, process.env.SECRET_KEY) as IJWTToken;

      const user: UserEntity = await this.usersService.authorizedUser(jwtToken.email);

      if (await this.tokenService.tokenUsedUp(changePasswordDTO.token)) {
        return { message: ResponseMessage.TOKEN_USED_UP };
      }

      await this.usersRepository.update(user, { password: changePasswordDTO.password });

      await this.tokenService.addToken(changePasswordDTO.token, jwtToken.exp);

      return { message: ResponseMessage.PASSWORD_CHANGED };

    } catch (error) {
      return { message: error.message ? error.message : 'Error', error };
    }
  }

  generateToken(user: UserEntity): string {
    const payload = { id: user.id, email: user.email };

    return sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_RESET,
    });
  }
}
