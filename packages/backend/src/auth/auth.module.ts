import {HttpModule, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DevicesEntity} from "../notifications/devices.entity";
import {NotificationsModule} from "./../notifications/notifications.module";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt.strategy";
import TokensEntity from "./token/token.entity";
import {TokenService} from "./token/token.service";
import {UserEntity} from "./users/user.entity";
import {UsersRepositoryProvider} from "./users/user.repository";
import {UsersService} from "./users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, DevicesEntity, TokensEntity]), HttpModule, NotificationsModule],
  controllers: [AuthController],
  providers: [AuthService, UsersRepositoryProvider, UsersService, JwtStrategy, TokenService],
  exports: [UsersRepositoryProvider, UsersService]
})
export class AuthModule {}