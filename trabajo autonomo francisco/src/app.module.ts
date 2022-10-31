import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
//import { Mongoose } from 'mongoose';
import { join } from 'path';
import { AspiranteModule } from './aspirante/aspirante.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AspiranteModule,
    InscripcionModule,
    CursoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
