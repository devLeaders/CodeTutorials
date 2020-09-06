import { AuthModule } from './auth/auth.module';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosModule } from './videos/videos.module';
import { configService } from './config/config.service';
import { FilesModule } from './files/files.module';
import { ScheduleModule } from '@nestjs/schedule';
// import { VideoStreamModule } from './video-stream/video-stream.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { ConnectorService } from './connector/connector.service';
import { ConnectorModule } from './connector/connector.module';
import firebaseConfig from "./notifications/firebaseConfig"

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [firebaseConfig]
    }),
    VideosModule,
    FilesModule,
    AuthModule,
    NotificationsModule,
    ConnectorModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, ConnectorService],
})
export class AppModule {}
