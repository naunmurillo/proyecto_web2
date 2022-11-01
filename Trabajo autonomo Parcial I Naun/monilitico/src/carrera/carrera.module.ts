import { Module } from '@nestjs/common';
import { CarreraService } from './services/carrera.service';
import { CarreraController } from './controllers/carrera.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrera, CarreraSchema } from './entities/carrera.entity';

@Module({
  imports: [
    //* metodo que se encarga de importar en el modulo de corredor, todo lo que
    //* Tiene que ver referente al esquema de corredor
    MongooseModule.forFeature([
      {
          name: Carrera.name,
          schema: CarreraSchema
      },
    ]),
  ],
  controllers: [CarreraController],
  providers: [CarreraService]
})
export class CarreraModule {}
