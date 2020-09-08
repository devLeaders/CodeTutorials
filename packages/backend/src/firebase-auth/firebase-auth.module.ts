import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { FirebaseAuthController } from './firebase-auth.controller';
import { FirebaseAuthService } from './firebase-auth.service';

@Module({
  imports: [],
  controllers: [FirebaseAuthController],
  providers: [FirebaseAuthService]
})
export class FirebaseAuthModule {}
