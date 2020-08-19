import { DevicesEntity } from '../notifications/devices.entity';
import { NotificationsService } from './../notifications/notifications.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { UsersRepositoryProvider } from './users/users.repositoryProvider';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, DevicesEntity])],
  controllers: [AuthController],
  providers: [AuthService, UsersRepositoryProvider, UsersService,JwtStrategy, NotificationsService]
})
export class AuthModule {}