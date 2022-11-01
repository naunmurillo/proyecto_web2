import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div align = "center">!Hola! Ingresa a la documentacion: <br><br><a href="https://monolitico-parcial1-naun-2022.herokuapp.com/documentation"><button>Ingresar</button></a></div>';
  }
}
