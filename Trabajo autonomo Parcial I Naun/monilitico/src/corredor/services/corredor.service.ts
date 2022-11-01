import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCorredorDto } from '../dto/create-corredor.dto';
import { UpdateCorredorDto } from '../dto/update-corredor.dto';
import { Corredor, CorredorDocument } from '../entities/corredor.entity';
import { Model } from 'mongoose';
//Logica de negocios

@Injectable()
export class CorredorService {
  constructor(
    @InjectModel(Corredor.name) private corredorModule: Model<CorredorDocument>,
  ) {}

  async create(createCorredorDto: CreateCorredorDto) {
    // TODO: DTO createCorredorDto --> BODY esto trae la data
    try {
      //Buscamos en la DB si ya se encuentra el corredor
      const corredorExist = await this.corredorModule.findOne({Cedula: createCorredorDto.Cedula});
      //!Si existe se manda un mensaje diciendo que ya se encuentra
      if(corredorExist){
        return ({
          messageError: `El corredor ${corredorExist.Nombre} ya existe`
        })
      }else{
        //*Si no existe se crea y se enseña un json.
        const corredorCreated = await (await this.corredorModule.create(createCorredorDto)).save()
        console.log(createCorredorDto)
        return ({
            SaveCorredor: corredorCreated
        })
      }
      
    } catch (error) {
      return ({
        messageError: error
      })
    }
    
  }

  async findAll() {
    try {
      //*Utilizamos el query para mostrar solos los datos 
      //*que no se hayan borrado(Con borrar me refiero a status:false)
      const query = { status: true}
      //*buscamos los datos con Promise teniendo cuantos hay y el data
      const [sum , corredores ] = await Promise.all([
        this.corredorModule.countDocuments(query),
        this.corredorModule.find(query)
      ])

      return ({
        Cantidad: sum,
        Corredores: corredores
    })
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }

  //Para buscar por cedula a un corredor
  async findOne(cedula: string) {
    try {
      //*Busca por cedula al corredor
      const corredorExist = await this.corredorModule.findOne({Cedula: cedula, status: true});
      if(!corredorExist){
        return ({
            messageError: `la cedula que ingresaste, ${cedula} no existe.`
        })
      }
      return ({
        Corredor: corredorExist,
      })
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }


  async update(cedula: string, updateCorredorDto: UpdateCorredorDto) {
    try {
      //* Busca al corredor por cedula y por que el status sea igual a true
      const updatedCorredor = await this.corredorModule.findOne({Cedula: cedula, status: true});
      //*Si no se encuentra suenta un messageError
      if(!updatedCorredor){
        return ({
          messageError: `La cedula que ingresaste, ${cedula} no existe`
        })
      }else{
        //* Se actualiza el corredor
        await updatedCorredor.updateOne(updateCorredorDto);
        return ({
          updatedCorredor: updateCorredorDto
        })
      }
    } catch (error) {
      return ({
        messageError: error
      })
    }
    
  }

  async remove(cedula: string) {
    try {
      //*Buscamos con el numero de cedula al corredor que queramos eliminar, y que este
      //*con el valor de status: true
      const deletedCorredor = await this.corredorModule.findOne({Cedula: cedula, status: true});
      
      if(!deletedCorredor){
        return ({
          messageError: `La cedula que ingresaste, ${cedula} no existe`
        })
      }else{
        //*Si el corredor se encontro, lo que haremos el pasar el status: false
        //*para que no siga saliendo
        await deletedCorredor.updateOne({status:false});
        return ({
          removeCorredor: deletedCorredor
        })
      }
      
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }
}
