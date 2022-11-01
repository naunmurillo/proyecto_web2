import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorredorModule } from './corredor/corredor.module';
import { CarreraModule } from './carrera/carrera.module';
import { SeguimientoModule } from './seguimiento/seguimiento.module';
dotenv.config();

@Module({
  imports: [ 
    MongooseModule.forRoot(process.env.CorredorDB),
    CorredorModule,
    CarreraModule,
    SeguimientoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
