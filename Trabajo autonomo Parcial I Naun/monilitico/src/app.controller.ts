import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



//TODO: http://localhost:4000/
//* Controlador es la capa de infraestructura que se encarga de manejar
//* las peticiones del servidor
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
