import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
declare const module: any;

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`,'Bootstrap');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
    }
}
  

bootstrap();
