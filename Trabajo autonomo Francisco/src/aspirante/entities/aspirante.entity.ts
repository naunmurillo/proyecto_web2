import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

//export type AspiranteDocument = Aspirante & Document;

@Schema()
export class Aspirante {
  @ApiProperty()
  @Prop()
  nombre: string;

  @ApiProperty()
  @Prop({
    type: String,
    unique: true,
    index: true,
  })
  correo: string;

  @ApiProperty()
  @Prop({
    type: String,
    unique: true,
    index: true,
  })
  identificacion: string;
}

export const AspiranteSchema = SchemaFactory.createForClass(Aspirante);
