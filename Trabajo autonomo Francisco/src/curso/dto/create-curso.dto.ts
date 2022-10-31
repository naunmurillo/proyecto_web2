import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCursoDto {
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
