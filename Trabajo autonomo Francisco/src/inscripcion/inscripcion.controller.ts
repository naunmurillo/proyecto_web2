import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Inscripcion } from './entities/inscripcion.entity';

@ApiTags('Resgistro de Inscripcion')
@Controller('inscripcion')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Creacion de Inscripciones',
    type: Inscripcion,
  })
  create(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionService.create(createInscripcionDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Extrae todos las Inscripciones',
  })
  findAll() {
    return this.inscripcionService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Extrae Inscripciones por ID',
  })
  findOne(@Param('id') id: string) {
    return this.inscripcionService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Actualizar a una inscripcion por ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateInscripcionDto: UpdateInscripcionDto,
  ) {
    return this.inscripcionService.update(id, updateInscripcionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Elimina una Inscripcion por ID',
  })
  remove(@Param('id') id: string) {
    return this.inscripcionService.remove(id);
  }
}
