"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const curso_entity_1 = require("./entities/curso.entity");
let CursoService = class CursoService {
    constructor(cursoModel) {
        this.cursoModel = cursoModel;
    }
    async create(createCursoDto) {
        try {
            const curso = await this.cursoModel.create(createCursoDto);
            return curso;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException('Error el curso ya existe');
            }
        }
    }
    async findAll() {
        const curso = await this.cursoModel.find();
        return curso;
    }
    async findOne(id) {
        let crcurso;
        if ((0, mongoose_2.isValidObjectId)(id)) {
            crcurso = await this.cursoModel.findById(id);
        }
        if (!crcurso) {
            crcurso = await this.cursoModel.findOne({
                descripcion: id,
            });
        }
        if (!crcurso) {
            throw new common_1.NotFoundException(`El curso con sus datos ${id} no existen`);
        }
        return crcurso;
    }
    async update(id, updateCursoDto) {
        try {
            const updateCurso = await this.cursoModel.findById(id);
            await updateCurso.updateOne(updateCursoDto);
            return Object.assign({}, updateCursoDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe el curso con ${id} que quieres actualizar`);
        }
    }
    async remove(id) {
        try {
            const Eliminarcurso = await this.cursoModel.findById(id);
            await Eliminarcurso.delete();
            return 'Curso eliminado correctamente';
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe el curso con el ${id} que quieres eliminar`);
        }
    }
};
CursoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(curso_entity_1.Curso.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CursoService);
exports.CursoService = CursoService;
//# sourceMappingURL=curso.service.js.map