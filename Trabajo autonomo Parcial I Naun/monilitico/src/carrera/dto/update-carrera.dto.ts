import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from "@nestjs/swagger";
import { CreateCarreraDto } from './create-carrera.dto';
import { IsNotEmpty, IsString, IsISO8601 } from "class-validator";

export class UpdateCarreraDto extends PartialType(CreateCarreraDto) {
    @ApiProperty({
        description: "Nombre del carrera",
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    Nombre: string;

    @ApiProperty({
        description: "Cantidad de kilomentros",
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    CantidadDeKilometros: string;

    @ApiProperty({
        description: "Detalles adicionales",
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    DetallesAdicionales: string;

    @ApiProperty({
        description: "Fecha de la carrera"
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    @IsISO8601()
    Fecha: string;

    @ApiProperty({
        description: "Hora de la carrera"
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    Hora: string;

}
