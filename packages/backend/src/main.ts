import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
  .setTitle('MyNetflix Api')
  .setDescription('API description')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  await app.listen(3300);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
    }
}
  

bootstrap();
