import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { Inscripcion } from './entities/inscripcion.entity';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectModel(Inscripcion.name)
    private readonly inscripcionModel: Model<Inscripcion>,
  ) {}
  async create(createInscripcionDto: CreateInscripcionDto) {
    try {
      const inscripcion = await this.inscripcionModel.create(
        createInscripcionDto,
      );
      return inscripcion;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Error la inscripcion ya existe');
      }
    }
  }

  async findAll() {
    const inscripcion = await this.inscripcionModel.find();
    return inscripcion;
  }

  async findOne(id: string) {
    let crinscripcion: Inscripcion;
    if (isValidObjectId(id)) {
      crinscripcion = await this.inscripcionModel.findById(id);
    }
    if (!crinscripcion) {
      crinscripcion = await this.inscripcionModel.findOne({
        fecha: id,
      });
    }
    if (!crinscripcion) {
      throw new NotFoundException(`El curso con sus datos ${id} no existen`);
    }
    return crinscripcion;
  }

  async update(id: string, updateInscripcionDto: UpdateInscripcionDto) {
    try {
      const updateInscripcion = await this.inscripcionModel.findById(id);
      await updateInscripcion.updateOne(updateInscripcionDto);
      return { ...updateInscripcionDto };
    } catch (error) {
      throw new NotFoundException(
        `No existe la inscripcion con ${id} que quieres actualizar`,
      );
    }
  }

  async remove(id: string) {
    try {
      const Eliminarinscripcion = await this.inscripcionModel.findById(id);
      await Eliminarinscripcion.delete();
      return 'Inscripcion eliminado correctamente';
    } catch (error) {
      throw new NotFoundException(
        `No existe la inscripcion con el ${id} que quieres eliminar`,
      );
    }
  }
}
