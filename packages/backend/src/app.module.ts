import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
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
  ],
  controllers: [AppController],
  providers: [AppService, ConnectorService],
})
export class AppModule {}
