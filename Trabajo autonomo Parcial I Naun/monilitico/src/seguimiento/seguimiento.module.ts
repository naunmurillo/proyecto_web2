import { Seguimiento, SeguimientoSchema } from './entities/seguimiento.entity';
import { Module } from '@nestjs/common';
import { SeguimientoService } from './services/seguimiento.service';
import { SeguimientoController } from './controllers/seguimiento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Corredor, CorredorSchema } from '../corredor/entities/corredor.entity';

@Module({
  imports: [
    //* metodo que se encarga de importar en el modulo de corredor, todo lo que
    //* Tiene que ver referente al esquema de corredor
    MongooseModule.forFeature([
      {
        name: Corredor.name,
        schema: CorredorSchema,
      },
      {
          name: Seguimiento.name,
          schema: SeguimientoSchema
      },
    ]),
  ],
  controllers: [SeguimientoController],
  providers: [SeguimientoService]
})
export class SeguimientoModule {}
