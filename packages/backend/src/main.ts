import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
require('dotenv').config();
import { Logger } from '@nestjs/common';
declare const module: any;

const port = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const options = new DocumentBuilder()
  .setTitle('MyNetflix Api')
  .setDescription('API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`,'Bootstrap');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
  

bootstrap();
