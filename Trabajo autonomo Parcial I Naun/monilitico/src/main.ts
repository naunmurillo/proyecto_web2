import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('REST-API project documentation')
  .setDescription('Rutas CRUD de Corredor, Carrera y Seguimiento')
  .setVersion('1.0')
  .addTag('Corredor')
  .addTag('Carrera')
  .addTag('Seguimiento')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT);
  console.log(process.env.PORT)
  console.log(process.env.CorredorDB)
}
bootstrap();
