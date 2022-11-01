import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Inscripcion, InscripcionSchema } from './entities/inscripcion.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Inscripcion.name,
        schema: InscripcionSchema,
      },
    ]),
  ],
  controllers: [InscripcionController],
  providers: [InscripcionService],
})
export class InscripcionModule {}
