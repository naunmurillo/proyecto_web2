import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorredorService } from '../services/corredor.service';
import { CreateCorredorDto } from '../dto/create-corredor.dto';
import { UpdateCorredorDto } from '../dto/update-corredor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Corredor')
//Controller, los que controlan las rutas de envio http.
//TODO: http://localhost:4000/corredor
//* Controlador es la capa de infraestructura que se encarga de manejar
//* las peticiones del servidor
@Controller('corredor')
export class CorredorController {
  constructor(private readonly corredorService: CorredorService) {}

  @Post()//* Entra en el POST
  create(@Body() createCorredorDto: CreateCorredorDto) {
    //* Aqui viene todo enviado por POST Body
    return this.corredorService.create(createCorredorDto);
  }

  @Get()
  findAll() {
    return this.corredorService.findAll();
  }

  @Get(':cedula')
  findOne(@Param('cedula') cedula: string) {
    return this.corredorService.findOne(cedula);
  }

  @Patch(':cedula')
  update(@Param('cedula') cedula: string, @Body() updateCorredorDto: UpdateCorredorDto) {
    return this.corredorService.update(cedula, updateCorredorDto);
  }

  @Delete(':cedula')
  remove(@Param('cedula') cedula: string) {
    return this.corredorService.remove(cedula);
  }
}
