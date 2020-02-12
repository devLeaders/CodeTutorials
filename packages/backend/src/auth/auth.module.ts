import { UsersRepository } from './user.repository';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}