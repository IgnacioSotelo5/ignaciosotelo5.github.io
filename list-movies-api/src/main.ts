import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ORIGIN_URL = ['http://localhost:3000', 'http://localhost:5173']
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ORIGIN_URL
  })
  await app.listen(3000);
}
bootstrap();
