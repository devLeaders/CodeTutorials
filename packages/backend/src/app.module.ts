import { AuthModule } from './auth/auth.module';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosModule } from './videos/videos.module';
import { configService } from './config/config.service';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { ConnectorService } from './connector/connector.service';
import { ConnectorModule } from './connector/connector.module';
import { FirebaseAuthModule } from './firebase-auth/firebase-auth.module';
import firebaseConfig from "./notifications/firebaseConfig"

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [firebaseConfig]
    }),
    VideosModule,
    FilesModule,
    AuthModule,
    NotificationsModule,
    ConnectorModule,
    HttpModule,
    FirebaseAuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ConnectorService],
})
export class AppModule {}
