import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div align = "center">!Hola! Ingresa a la documentacion: <br><br><a href="http://localhost:4000/documentation"><button>Ingresar</button></a></div>';
  }
}
