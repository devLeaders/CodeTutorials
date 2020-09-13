import { UsersRepositoryProvider } from './users/user.repository';
import { DevicesEntity } from '../notifications/devices.entity';
import { NotificationsModule } from './../notifications/notifications.module';
import { Module, HttpModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, DevicesEntity]), HttpModule, NotificationsModule],
  controllers: [AuthController],
  providers: [AuthService, UsersRepositoryProvider, UsersService,JwtStrategy],
  exports: [UsersRepositoryProvider, UsersService]
})
export class AuthModule {}