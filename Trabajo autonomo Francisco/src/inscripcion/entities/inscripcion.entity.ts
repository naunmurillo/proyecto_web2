import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
@Schema()
export class Inscripcion {
  @ApiProperty()
  @Prop()
  fecha: string;

  @ApiProperty()
  @Prop()
  hora: string;

  @ApiProperty()
  @Prop()
  valor_cancelar: string;
}

export const InscripcionSchema = SchemaFactory.createForClass(Inscripcion);
