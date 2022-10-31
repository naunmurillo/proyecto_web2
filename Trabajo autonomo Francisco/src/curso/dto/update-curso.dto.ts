import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoDto } from './create-curso.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {
  @ApiProperty({
    description: 'Descripcion del Curso',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Fecha de inicio del Cruso',
  })
  @IsString()
  @IsNotEmpty()
  fecha_inicio: string;

  @ApiProperty({
    description: 'Hora de inicio del Curso',
  })
  @IsString()
  @IsNotEmpty()
  hora_inicio: string;
}
