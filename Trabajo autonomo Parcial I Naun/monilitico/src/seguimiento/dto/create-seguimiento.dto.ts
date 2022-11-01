import { Types } from 'mongoose';
//TODO: Aqui entra lo que es DTO, que es la capa
//TODO: que se encarga de transferir los datos

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumberString } from "class-validator";

//* La clase CreateSeguimientoDto se utilizar para hacer las validaciones de Post
export class CreateSeguimientoDto {

    @ApiProperty({
        description: 'Id de corredor'
    })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    idCorredor: Types.ObjectId;

    @ApiProperty({
        description: 'Id de carrera'
    })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    idCarrera: Types.ObjectId;
    

    @ApiProperty({
        description: 'Tiempo de llegada'
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    TiempoDeLlegada: string;

    @ApiProperty({
        description: 'Orden de llegada'
    })
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    OrdenDeLlegada: string;

    @ApiProperty({
        description: 'Pulso inicial'
    })
    @IsString()
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    PulsoInicial: string;


    @ApiProperty({
        description: 'Pulso Final'
    })
    @IsString()
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    PulsoFinal: string;
}
