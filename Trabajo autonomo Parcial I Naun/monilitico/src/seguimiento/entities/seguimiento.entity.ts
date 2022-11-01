import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types,  } from 'mongoose';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Corredor } from 'src/corredor/entities/corredor.entity';

export type SeguimientoDocument = Seguimiento & Document;//	Definición del tipo de un documento seguimiento

//Decorador para crear una colección MongoDB para la clase
@Schema()
export class Seguimiento {
    //Decorador Prop, haciendo referencia a que esto es una propiedad
    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: 'Corredor'
    })
    idCorredor: Corredor;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: 'Carrera'
    })
    idCarrera: Carrera;

    @Prop({
        required: true,
        type: String,
    })
    TiempoDeLlegada: string;

    @Prop({
        required: true,
        type: String,
    })
    OrdenDeLlegada: string;

    @Prop({
        required: true,
        type: String,
    })
    PulsoInicial: string;

    @Prop({
        required: true,
        type: String,
    })
    PulsoFinal: string;

    @Prop({
        default: true,
        required: true,
        type: Boolean,
    })
    status: Boolean;
}

export const SeguimientoSchema = SchemaFactory.createForClass(Seguimiento);//	Esquema Mongoose creado a partir de la clase