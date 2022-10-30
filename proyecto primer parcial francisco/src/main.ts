import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const swaggerr = new DocumentBuilder()
    .setTitle('Implementacion de Registro')
    .setDescription('RES-API de Aspirante, Curso, Inscripciones')
    .setVersion('0.01')
    .addTag('Swagger Aspirante')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerr);
  SwaggerModule.setup('swag', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(process.env.PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${port}`);
  });
}
bootstrap();
