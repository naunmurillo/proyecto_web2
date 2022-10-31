import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectModel(Curso.name)
    private readonly cursoModel: Model<Curso>,
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    try {
      const curso = await this.cursoModel.create(createCursoDto);
      return curso;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Error el curso ya existe');
      }
    }
  }

  async findAll() {
    const curso = await this.cursoModel.find();
    return curso;
  }

  async findOne(id: string) {
    let crcurso: Curso;
    if (isValidObjectId(id)) {
      crcurso = await this.cursoModel.findById(id);
    }
    if (!crcurso) {
      crcurso = await this.cursoModel.findOne({
        descripcion: id,
      });
    }
    if (!crcurso) {
      throw new NotFoundException(`El curso con sus datos ${id} no existen`);
    }
    return crcurso;
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    try {
      const updateCurso = await this.cursoModel.findById(id);
      await updateCurso.updateOne(updateCursoDto);
      return { ...updateCursoDto };
    } catch (error) {
      throw new NotFoundException(
        `No existe el curso con ${id} que quieres actualizar`,
      );
    }
  }
  async remove(id: string) {
    try {
      const Eliminarcurso = await this.cursoModel.findById(id);
      await Eliminarcurso.delete();
      return 'Curso eliminado correctamente';
    } catch (error) {
      throw new NotFoundException(
        `No existe el curso con el ${id} que quieres eliminar`,
      );
    }
  }
}
