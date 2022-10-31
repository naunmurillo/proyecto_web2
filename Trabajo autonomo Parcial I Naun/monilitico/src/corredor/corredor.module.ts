import { Module } from '@nestjs/common';
import { CorredorService } from './services/corredor.service';
import { CorredorController } from './controllers/corredor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Corredor, CorredorSchema } from './entities/corredor.entity';

//* Modulo de corredor

@Module({
  imports: [
    //* metodo que se encarga de importar en el modulo de corredor, todo lo que
    //* Tiene que ver referente al esquema de corredor
    MongooseModule.forFeature([
      {
          name: Corredor.name,
          schema: CorredorSchema
      },
    ]),
  ],
  controllers: [CorredorController],
  providers: [CorredorService]
})
export class CorredorModule {}
