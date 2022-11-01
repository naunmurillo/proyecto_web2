import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraService } from '../services/carrera.service';
import { CreateCarreraDto } from '../dto/create-carrera.dto';
import { UpdateCarreraDto } from '../dto/update-carrera.dto';
import { ApiTags } from '@nestjs/swagger';

//Tags para la documentacion
@ApiTags('Carrera')
//Controller, los que controlan las rutas de envio http.
//TODO: http://localhost:4000/carrera
//* Controlador es la capa de infraestructura que se encarga de manejar
//* las peticiones del servidor
@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Get()
  findAll() {
    return this.carreraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carreraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraService.remove(id);
  }
}
