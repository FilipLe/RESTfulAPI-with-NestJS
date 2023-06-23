import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // strip out any input that is not defined in the class validator
    whitelist: true,
  }));
  await app.listen(3333);
}
bootstrap();
