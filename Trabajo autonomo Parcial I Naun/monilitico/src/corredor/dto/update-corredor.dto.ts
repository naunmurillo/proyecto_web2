import { PartialType } from '@nestjs/mapped-types';
import { CreateCorredorDto } from './create-corredor.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumberString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class UpdateCorredorDto extends PartialType(CreateCorredorDto) {
    @ApiProperty({
        description: 'Nombre del Corredor'
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    Nombre: string;

    @ApiProperty({
        description: 'Numero de cedula'
    })
    @MinLength(10, { message: 'Debe tener 10 digitos'})
    @MaxLength(10, {message: 'Debe tener 10 digitos'})
    @IsNotEmpty({ message: 'Ingrese su cedula.'})
    //* verifica que los datos en string sean solo numeros
    @IsNumberString({ message: 'Deber contener solo numeros'})
    Cedula: string;

    @ApiProperty({
        description: 'Peso del corredor'
    })
    @IsString()
    @IsNotEmpty({ message: 'Ingrese el peso del corredor'})
    Peso: string;


    @ApiProperty({
        description: 'Altura del corredor'
    })
    @IsString()
    @IsNotEmpty({ message: 'Ingrese la altura del corredor'})
    Altura: string;

    @ApiProperty({
        description: 'Altura del corredor'
    })
    @MinLength(1, { message: 'Debe tener 2 digitos' })
    @MaxLength(2, { message: 'Debe tener 2 digitos' })
    @IsNotEmpty({ message: 'Ingrese la edad del corredor' })
    @IsNumberString({ message: 'Deber contener solo numeros' })
    Edad: string;
}
