import { Module } from '@nestjs/common';
import { AspiranteService } from './aspirante.service';
import { AspiranteController } from './aspirante.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aspirante, AspiranteSchema } from './entities/aspirante.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Aspirante.name, schema: AspiranteSchema },
    ]),
  ],
  controllers: [AspiranteController],
  providers: [AspiranteService],
})
export class AspiranteModule {}
