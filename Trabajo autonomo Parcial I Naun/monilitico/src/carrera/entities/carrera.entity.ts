import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarreraDocument = Carrera & Document;

//Decorador Schema
@Schema()
export class Carrera {
    //Decorador Prop, haciendo referencia a que esto es una propiedad
    @Prop({
        required: true,
        type: String,
    })
    Nombre: string;

    @Prop({
        required: true,
        type: String,
    })
    CantidadDeKilometros: string;

    @Prop({
        required: true,
        type: String,
    })
    DetallesAdicionales: string;

    @Prop({
        required: true,
        type: String,
    })
    Fecha: string;

    @Prop({
        required: true,
        type: String,
    })
    Hora: string;

    @Prop({
        default: true,
        required: true,
        type: Boolean,
    })
    status: Boolean;
}

export const CarreraSchema = SchemaFactory.createForClass(Carrera);