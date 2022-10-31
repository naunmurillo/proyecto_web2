import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
import { Aspirante } from './entities/aspirante.entity';

@Injectable()
export class AspiranteService {
  constructor(
    @InjectModel(Aspirante.name)
    private readonly aspiranteModel: Model<Aspirante>,
  ) {}
  // getInicio(): string {
  //   return 'Comprobacion de la ruta aspirante de que se creo con Nest JS';
  // }

  async create(createAspiranteDto: CreateAspiranteDto) {
    try {
      const aspirante = await this.aspiranteModel.create(createAspiranteDto);
      return `Se creo correctamente el aspirante ${aspirante}`;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          'La identificacion es unica para cada usuario',
        );
      }
      throw new InternalServerErrorException('Error el aspirante ya existe');
    }
  }

  async findAll() {
    const aspirante = await this.aspiranteModel.find();
    return aspirante;
    //return await this.aspiranteModel.find({}, { _id: 1, __v: 0 });
  }

  async findOne(id: string) {
    let craspirante: Aspirante;
    if (isValidObjectId(id)) {
      craspirante = await this.aspiranteModel.findById(id);
    }
    if (!craspirante) {
      craspirante = await this.aspiranteModel.findOne({ identificacion: id });
    }
    if (!craspirante) {
      throw new NotFoundException(
        `El aspirante con sus datos ${id} no existen `,
      );
    }
    return craspirante; //`This action returns a #${id} aspirante`;
  }

  async update(id: string, updateAspiranteDto: UpdateAspiranteDto) {
    try {
      const updateAspirante = await this.aspiranteModel.findById(id);
      await updateAspirante.updateOne(updateAspiranteDto);
      return `Se actualizo correctamente el aspirante ${updateAspiranteDto}`; //{ ...updateAspiranteDto };
    } catch (error) {
      throw new NotFoundException(
        `No existe el aspirante con ${id} que quieres actualizar`,
      );
    }
  }
  async remove(id: string) {
    try {
      const Eliminaraspirante = await this.aspiranteModel.findById(id);
      await Eliminaraspirante.delete();
      return 'Aspirante eliminado correctamente';
    } catch (error) {
      throw new NotFoundException(
        `No existe el aspirante con el id ${id} que quieres eliminar`,
      );
    }
  }
}
