import {HttpModule, Module} from "@nestjs/common";
// import { VideoStreamModule } from './video-stream/video-stream.module';
import {ConfigModule} from "@nestjs/config";
import {ScheduleModule} from "@nestjs/schedule";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {AuthModule} from "./auth/auth.module";
import {configService} from "./config/config.service";
import {ConnectorModule} from "./connector/connector.module";
import {ConnectorService} from "./connector/connector.service";
import {FilesModule} from "./files/files.module";
import {FirebaseAuthModule} from "./firebase-auth/firebase-auth.module";
import firebaseConfig from "./notifications/firebaseConfig";
import {NotificationsModule} from "./notifications/notifications.module";
import {VideosModule} from "./videos/videos.module";

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
    HttpModule,
    FirebaseAuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ConnectorService],
})
export class AppModule {}
