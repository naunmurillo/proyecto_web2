//TODO: Aqui entra lo que es DTO, que es la capa
//TODO: que se encarga de transferir los datos
import { ApiProperty } from "@nestjs/swagger";
import { IsISO8601, IsNotEmpty, IsString } from "class-validator";
export class CreateCarreraDto {
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
