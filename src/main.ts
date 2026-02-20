import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log(app);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false
  }));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableVersioning({
    type: VersioningType.URI
  })
  await app.listen(3001);
}
bootstrap();
