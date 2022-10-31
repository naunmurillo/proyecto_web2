import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
@Schema()
export class Curso {
  @ApiProperty()
  @Prop()
  descripcion: string;

  @ApiProperty()
  @Prop()
  fecha_inicio: string;

  @ApiProperty()
  @Prop({
    type: String,
    unique: true,
  })
  hora_inicio: string;
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
