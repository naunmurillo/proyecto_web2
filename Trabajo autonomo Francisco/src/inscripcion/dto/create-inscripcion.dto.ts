import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateInscripcionDto {
  @ApiProperty({
    description: 'Fecha de la inscripcion',
  })
  @IsString()
  @IsNotEmpty()
  fecha: string;

  @ApiProperty({
    description: 'Hora de inicio para las inscripciones',
  })
  @IsString()
  @IsNotEmpty()
  hora: string;

  @ApiProperty({
    description: 'Valor a carcelar por la inscripcion del Curso',
  })
  @IsString()
  @IsNotEmpty()
  valor_cancelar: string;
}
