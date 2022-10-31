import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Curso } from './entities/curso.entity';

@ApiTags('Resgistro de Curso')
@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Creacion del Curso',
    type: Curso,
  })
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Extrae todos los Cursos',
  })
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Extrae Curso por ID',
  })
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Actualizar a un curso por ID',
  })
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(id, updateCursoDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Elimina un Curso por ID',
  })
  remove(@Param('id') id: string) {
    return this.cursoService.remove(id);
  }
}
