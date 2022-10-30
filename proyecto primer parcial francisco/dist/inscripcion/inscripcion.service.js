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
exports.InscripcionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const inscripcion_entity_1 = require("./entities/inscripcion.entity");
let InscripcionService = class InscripcionService {
    constructor(inscripcionModel) {
        this.inscripcionModel = inscripcionModel;
    }
    async create(createInscripcionDto) {
        try {
            const inscripcion = await this.inscripcionModel.create(createInscripcionDto);
            return inscripcion;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException('Error la inscripcion ya existe');
            }
        }
    }
    async findAll() {
        const inscripcion = await this.inscripcionModel.find();
        return inscripcion;
    }
    async findOne(id) {
        let crinscripcion;
        if ((0, mongoose_2.isValidObjectId)(id)) {
            crinscripcion = await this.inscripcionModel.findById(id);
        }
        if (!crinscripcion) {
            crinscripcion = await this.inscripcionModel.findOne({
                fecha: id,
            });
        }
        if (!crinscripcion) {
            throw new common_1.NotFoundException(`El curso con sus datos ${id} no existen`);
        }
        return crinscripcion;
    }
    async update(id, updateInscripcionDto) {
        try {
            const updateInscripcion = await this.inscripcionModel.findById(id);
            await updateInscripcion.updateOne(updateInscripcionDto);
            return Object.assign({}, updateInscripcionDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe la inscripcion con ${id} que quieres actualizar`);
        }
    }
    async remove(id) {
        try {
            const Eliminarinscripcion = await this.inscripcionModel.findById(id);
            await Eliminarinscripcion.delete();
            return 'Inscripcion eliminado correctamente';
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe la inscripcion con el ${id} que quieres eliminar`);
        }
    }
};
InscripcionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inscripcion_entity_1.Inscripcion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InscripcionService);
exports.InscripcionService = InscripcionService;
//# sourceMappingURL=inscripcion.service.js.map