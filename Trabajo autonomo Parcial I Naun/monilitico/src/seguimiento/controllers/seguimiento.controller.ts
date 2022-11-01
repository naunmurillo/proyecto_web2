import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguimientoService } from '../services/seguimiento.service';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Seguimiento')
//Controller, los que controlan las rutas de envio http.
//TODO: http://localhost:4000/seguimiento
//* Controlador es la capa de infraestructura que se encarga de manejar
//* las peticiones del servidor
@Controller('seguimiento')
export class SeguimientoController {
  constructor(private readonly seguimientoService: SeguimientoService) {}

  @Post()
  create(@Body() createSeguimientoDto: CreateSeguimientoDto) {
    return this.seguimientoService.create(createSeguimientoDto);
  }

  @Get()
  findAll() {
    return this.seguimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguimientoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguimientoDto: UpdateSeguimientoDto) {
    return this.seguimientoService.update(id, updateSeguimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguimientoService.remove(id);
  }
}
