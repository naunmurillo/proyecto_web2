import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';
import { Corredor, CorredorDocument } from 'src/corredor/entities/corredor.entity';
import { Seguimiento, SeguimientoDocument } from '../entities/seguimiento.entity';


//Capa logica de negocios
@Injectable()
export class SeguimientoService {
  constructor(
    @InjectModel(Seguimiento.name) private seguimientoModule: Model<SeguimientoDocument>,
    @InjectModel(Corredor.name) private corredorModule: Model<CorredorDocument>,
  ) { }

  async create(createSeguimientoDto: CreateSeguimientoDto) {
    // TODO: DTO createCorredorDto --> BODY esto trae la data
    try {
      //const corredorExist = await this.seguimientoModule.findOne({idCarrera: createSeguimientoDto.id});

      //*Si no existe se crea y se enseña un json.
      const seguimientoCreated = await (await this.seguimientoModule.create(createSeguimientoDto)).save()
      console.log(seguimientoCreated)
      return ({
        SaveCorredor: seguimientoCreated
      }) 
    }catch(error) {
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
      const [sum , seguimientos ] = await Promise.all([
        this.seguimientoModule.countDocuments(query),
        this.seguimientoModule.find(query)
      ])

      return ({
        Cantidad: sum,
        Seguimientos: seguimientos//
    })
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }
  //*SeguimientoPorCedula
  async findOne(cedula: string) {
    try {
      //* Verificamos si existe corredor
      const corredorExist = await this.corredorModule.findOne({Cedula: cedula, status: true});
      console.log(corredorExist)
      if (!corredorExist){
        return({
            message: `corredor con la cedula: ${cedula} no existe.`
        })
    }else{
      //* Buscamos todos los seguimientos de ese corredor
      //* Y utilizamos populate() => Para hacer JOIN entre las dos entidades relacionadas 
      const seguimientoExist = await this.seguimientoModule.find({ idCorredor: corredorExist.id, status: true})
      .populate('idCorredor').populate('idCarrera');
      if(seguimientoExist.length == 0){
        return({
          message: `seguimientos con la cedula: ${cedula} no existen.`
        })
      }else{
        console.log(seguimientoExist)
        return ({
          dataSeguimientos: seguimientoExist,
        })
      }
    }
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }

  async update(id: string, updateSeguimientoDto: UpdateSeguimientoDto) {
    try {
      const updatedSeguimiento = await this.seguimientoModule.findOne({_id: id, status: true});
      //*Si no se encuentra suelta un messageError
      if(!updatedSeguimiento){
        return ({
          messageError: `El seguimiento con el id:${id} no existe`
        })
      }else{
        //* Se actualiza el corredor
        await updatedSeguimiento.updateOne(updateSeguimientoDto);
        return ({
          updatedSeguimiento: updateSeguimientoDto
        })
      }
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }

  async remove(id: string) {
    try {
      //*Buscamos con el id, el seguimiento que queramos eliminar, y que este
      //*con el valor de status: true
      const deletedSeguimiento = await this.seguimientoModule.findOne({_id: id, status: true});
      
      if(!deletedSeguimiento){
        return ({
          messageError: `El seguimiento con el id:${id} no existe`
        })
      }else{
        //*Si el seguimiento se encontro, lo que haremos el pasar el status: false
        //*para que no siga saliendo
        await deletedSeguimiento.updateOne({status:false});
        return ({
          removeSeguimiento: deletedSeguimiento
        })
      }
      
    } catch (error) {
      return ({
        messageError: error
      })
    }
  }
}
