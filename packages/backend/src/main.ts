import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
require('dotenv').config();
import { Logger, ValidationPipe } from '@nestjs/common';
import * as admin from 'firebase-admin';

import { ConfigService } from '@nestjs/config';
import { ServiceAccount } from "firebase-admin";
import {FirebaseConfig} from "./notifications/firebaseConfig"

const helmet = require('helmet');

declare const module: any;

const port = process.env.APP_PORT;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('MyNetflix Api')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const serviceAccount = configService.get<ServiceAccount>('firebaseConfig');
  const firebaseDbUrl = configService.get<string>('FIREBASE_DATABASE_URL')

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebaseDbUrl,
  });

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
  console.log(`Server running on http://localhost:${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
