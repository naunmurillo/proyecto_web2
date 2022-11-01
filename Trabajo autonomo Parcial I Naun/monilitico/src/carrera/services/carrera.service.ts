import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarreraDto } from '../dto/create-carrera.dto';
import { UpdateCarreraDto } from '../dto/update-carrera.dto';
import { Carrera, CarreraDocument } from '../entities/carrera.entity';

@Injectable()
export class CarreraService {
  constructor(
    @InjectModel(Carrera.name) private carreraModule: Model<CarreraDocument>,
  ){}

  async create(createCarreraDto: CreateCarreraDto) {
    // TODO: DTO createCorredorDto --> BODY esto trae la data
    try {
            //Buscamos en la DB si ya se encuentra el corredor
            const carreraExist = await this.carreraModule.findOne({ Fecha: createCarreraDto.Fecha, Hora: createCarreraDto.Hora });
            //!Si existe se manda un mensaje diciendo que ya se encuentra
            if(carreraExist){
              return ({
                messageError: `${carreraExist.Nombre}, con la fecha:${carreraExist.Fecha} y hora:${carreraExist.Hora}  ya existe`
              })
            }else{
              //*Si no existe se crea y se enseña un json.
              const corredorCreated = await (await this.carreraModule.create(createCarreraDto)).save()
              console.log(createCarreraDto)
              return ({
                  SaveCorredor: corredorCreated
              })
            }
    } catch (error) {
      return ({
        messageError: `${error}`
      })
    }
  }

  async findAll() {
    try {
      //*Utilizamos el query para mostrar solos los datos 
      //*que no se hayan borrado(Con borrar me refiero a status:false)
      const query = { status: true}
      //*buscamos los datos con Promise teniendo cuantos hay y el data
      const [sum , carreras ] = await Promise.all([
        this.carreraModule.countDocuments(query),
        this.carreraModule.find(query)
      ])

      return ({
        Cantidad: sum,
        Carreras: carreras
    })
    } catch (error) {
      return ({
        messageError: `${error}`
      })
    }
  }

  async findOne(id: string) {
    try {
      //*Busca por cedula al corredor
      const carreraExist = await this.carreraModule.find({ Nombre: id, status: true });
      //Si no existe suelta un error
      if(!carreraExist){
        return ({
            messageError: `${id} no existe.`
        })
      }
      return ({
        Cantidad: carreraExist.length,
        Carreras: carreraExist,
      })
    } catch (error) {
      
    }
  }

  async update(id: string, updateCarreraDto: UpdateCarreraDto) {
    try {
      //* Busca a la carrera por id y por que el status sea igual a true
      const updateCarrera = await this.carreraModule.findOne({_id: id, status: true});
      console.log(this.carreraModule)
      //*Si no se encuentra suenta un messageError
      if(!updateCarrera){
        return ({
          messageError: `La carrera con el id:${id} no existe`
        })
      }else{
        //* Se actualiza el corredor
        await updateCarrera.updateOne(updateCarreraDto);
        return ({
          updateCarrera: updateCarreraDto
        })
      }
    } catch (error) {
      
    }
  }

  async remove(id: string) {
    try {
      //*Buscamos con el id de carrera a la carrera que queramos eliminar
      //*y que este con el valor de status: true
      const deletedCarrera = await this.carreraModule.findOne({_id: id, status: true});
      
      if(!deletedCarrera){
        return ({
          messageError: `La carrera con el id:${id} no existe`
        })
      }else{
        //*Si el carrera se encontro, lo que haremos el pasar el status: false
        //*para que no siga saliendo
        await deletedCarrera.updateOne({status:false});
        return ({
          removeCarrera: deletedCarrera
        })
      }
    } catch (error) {
      return ({
        messageError: `${error}`
      })
    }
  }
}
