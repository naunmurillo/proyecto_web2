import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateAspiranteDto {
  @ApiProperty({
    description: 'Nombre del Aspirante',
    minLength: 5,
  })
  @IsString({ message: 'Debe ser una cadena de Texto' })
  @IsNotEmpty({ message: 'Debe llenar todos los datos no puede ir vacios' })
  @MinLength(5, { message: 'el nombre debe ser manimo de 5 caracter' })
  nombre: string;

  @ApiProperty({
    description: 'Correo del Aspirante',
  })
  @IsString()
  @IsNotEmpty({ message: 'Debe llenar todos los datos no puede ir vacios' })
  correo: string;

  @ApiProperty({
    description: 'Identificacion del aspirante',
    maxLength: 10,
  })
  @IsString({ message: 'Debe ser una cadena de Texto' })
  @IsNotEmpty({ message: 'Debe llenar todos los datos no puede ir vacios' })
  @MaxLength(10, { message: 'debe ser maximo de 10 caracter' })
  identificacion: string;
}
