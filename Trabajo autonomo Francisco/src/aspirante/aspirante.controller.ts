import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AspiranteService } from './aspirante.service';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Aspirante } from './entities/aspirante.entity';

@ApiTags('Resgistro de Aspirantes')
@Controller('aspirante')
export class AspiranteController {
  constructor(private readonly aspiranteService: AspiranteService) {}
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Creacion de Aspirante',
    type: Aspirante,
  })
  @ApiResponse({
    status: 500,
    description: 'Por si pasa un error al crear un aspirante',
  })
  create(@Body() createAspiranteDto: CreateAspiranteDto) {
    return this.aspiranteService.create(createAspiranteDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Extrae todos los Aspirantes',
  })
  @ApiResponse({
    status: 500,
    description: 'Por si pasa un error al extraer',
  })
  findAll() {
    return this.aspiranteService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Estrae Aspirante por ID',
  })
  @ApiResponse({
    status: 500,
    description: 'Por si pasa un error al extraer un aspirante por id',
  })
  findOne(@Param('id') id: string) {
    return this.aspiranteService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Actualiza a un aspirante por ID',
  })
  @ApiResponse({
    status: 500,
    description: 'Por si pasa un error al actualizar aspirante por id',
  })
  update(
    @Param('id') id: string,
    @Body() updateAspiranteDto: UpdateAspiranteDto,
  ) {
    return this.aspiranteService.update(id, updateAspiranteDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Elimina un Aspirante por ID',
  })
  @ApiResponse({
    status: 500,
    description: 'Por si pasa un error al eliminar un aspirante por id',
  })
  remove(@Param('id') id: string) {
    return this.aspiranteService.remove(id);
  }
}
