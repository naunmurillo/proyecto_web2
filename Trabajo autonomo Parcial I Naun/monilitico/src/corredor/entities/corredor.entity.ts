import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CorredorDocument = Corredor & Document;

//Decorador Schema
@Schema()
export class Corredor {
    //Decorador Prop, haciendo referencia a que esto es una propiedad
    @Prop({
        required: true,
        type: String,
    })
    Nombre: string;

    @Prop({
        unique: true,
        required: true,
        type: String,
    })
    Cedula: string;

    @Prop({
        required: true,
        type: String,
    })
    Peso: string;

    @Prop({
        required: true,
        type: String,
    })
    Altura: string;

    @Prop({
        required: true,
        type: String,
    })
    Edad: string;

    @Prop({
        default: true,
        required: true,
        type: Boolean,
    })
    status: Boolean;
}

export const CorredorSchema = SchemaFactory.createForClass(Corredor);